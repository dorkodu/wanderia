type Comment = {
  id: string
  body: string
  authorId: string
  createdAt: Date
}

type Todo = {
  id: string
  title: string
  userId: string
  completed: boolean
  invitedUsers: string[]
}

type Role = "admin" | "moderator" | "user"
type User = { blockedBy: string[]; roles: Role[]; id: string }

type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((user: User, data: Permissions[Key]["dataType"]) => boolean)

type RolesWithPermissions = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>
    }>
  }>
}

type Permissions = {
  comments: {
    dataType: Comment
    action: "view" | "create" | "update"
  }
  todos: {
    // Can do something like Pick<Todo, "userId"> to get just the rows you use
    dataType: Todo
    action: "view" | "create" | "update" | "delete"
  }
}

const ROLES = {
  admin: {
    comments: {
      view: true,
      create: true,
      update: true,
    },
    todos: {
      view: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  moderator: {
    comments: {
      view: true,
      create: true,
      update: true,
    },
    todos: {
      view: true,
      create: true,
      update: true,
      delete: (_user, todo) => todo.completed,
    },
  },
  user: {
    comments: {
      view: (user, comment) => !user.blockedBy.includes(comment.authorId),
      create: true,
      update: (user, comment) => comment.authorId === user.id,
    },
    todos: {
      view: (user, todo) => !user.blockedBy.includes(todo.userId),
      create: true,
      update: (user, todo) =>
        todo.userId === user.id || todo.invitedUsers.includes(user.id),
      delete: (user, todo) =>
        (todo.userId === user.id || todo.invitedUsers.includes(user.id)) &&
        todo.completed,
    },
  },
} as const satisfies RolesWithPermissions

export function hasPermission<Resource extends keyof Permissions>(
  user: User,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"]
) {
  return user.roles.some(role => {
    const permission = (ROLES as RolesWithPermissions)[role][resource]?.[action]
    if (permission == null) return false

    if (typeof permission === "boolean") return permission
    return data != null && permission(user, data)
  })
}

// USAGE:
const user: User = { blockedBy: ["2"], id: "1", roles: ["user"] }
const todo: Todo = {
  completed: false,
  id: "3",
  invitedUsers: [],
  title: "Test Todo",
  userId: "1",
}

// Can create a comment
hasPermission(user, "comments", "create")

// Can view the `todo` Todo
hasPermission(user, "todos", "view", todo)

// Can view all todos
hasPermission(user, "todos", "view")