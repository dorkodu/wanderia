import { createFileRoute } from "@tanstack/react-router";
import Emoji from "@web/components/misc/Emoji";
import { Container, Group, Stack } from "@web/components/ui/layout";
import { Title } from "@web/components/ui/typography";

export const Route = createFileRoute("/_www/legal/refund-policy")({
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <Container size={760}>
      <Group wrap="nowrap" style={{ maxWidth: 440 }}>
        <Emoji emoji="🧾" size={36} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Refund Policy
          </Title>
          <Title order={2} color="dimmed" fw={600} lh={1.2} size={18} className="mt-1">
            Our policy on refunds for products and services.
          </Title>
        </Stack>
      </Group>

      <p>Last updated: June 02, 2024</p>
      <p>Thank you for purchasing a Dorkodu product/service.</p>
      <p>
        If, for any reason, You are not completely satisfied with a purchase We invite You to review
        our policy on refunds.
      </p>
      <p>The following terms are applicable for any products that You purchased with Us.</p>
      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the
        following conditions. The following definitions shall have the same meaning regardless of
        whether they appear in singular or in plural.
      </p>
      <h3>Definitions</h3>
      <p>For the purposes of this Return and Refund Policy:</p>
      <ul>
        <li>
          <p>
            <strong>Application</strong> means one of the software programs provided by the Company
            downloaded by You on any electronic device, which are named Dorkodu, Trekie or
            Minicards.
          </p>
        </li>
        <li>
          <p>
            <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
            &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Dorkodu, legally
            represented by Doruk Eray and Berk Cambaz.
          </p>
        </li>
        <li>
          <p>
            <strong>Goods</strong> refer to the items offered for sale on the Service.
          </p>
        </li>
        <li>
          <p>
            <strong>Orders</strong> mean a request by You to purchase Goods from Us.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> refers to the Application or the Website or both.
          </p>
        </li>
        <li>
          <p>
            <strong>Website</strong> refers to Dorkodu's official website, accessible from{" "}
            <a href="https://dorkodu.com" target="_blank" rel="noreferrer">
              https://dorkodu.com
            </a>
          </p>
        </li>
        <li>
          <p>
            <strong>You</strong> means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is accessing or using
            the Service, as applicable.
          </p>
        </li>
      </ul>
      <h2>Your Order Cancellation Rights</h2>
      <p>
        You are entitled to cancel Your Order within 14 days without giving any reason for doing so.
      </p>
      <p>
        The deadline for cancelling an Order is 14 days from the date on which You received the
        Goods or on which a third party you have appointed, who is not the carrier, takes possession
        of the product delivered.
      </p>
      <p>
        In order to exercise Your right of cancellation, You must inform Us of your decision by
        means of a clear statement. You can inform us of your decision by:
      </p>
      <ul>
        <li>
          By email: <a href="mailto:hey@dorkodu.com">hey@dorkodu.com</a>
        </li>
        <li>By submitting the form on our website: https://dorkodu.com/refund</li>
      </ul>
      <p>
        We will reimburse You no later than 14 days from the day on which We receive the returned
        Goods. We will use the same means of payment as You used for the Order, and You will not
        incur any fees for such reimbursement.
      </p>
      <h2>Conditions for Returns</h2>
      <p>In order for the Goods to be eligible for a return, please make sure that:</p>
      <ul>
        <li>The Goods were purchased in the last 14 days</li>
      </ul>
      <p>The following Goods cannot be returned:</p>
      <ul>
        <li>The supply of Goods made to Your specifications or clearly personalized.</li>
        <li>
          The supply of Goods which according to their nature are not suitable to be returned,
          deteriorate rapidly or where the date of expiry is over.
        </li>
        <li>
          The supply of Goods which are not suitable for return due to health protection or hygiene
          reasons and were unsealed after delivery.
        </li>
        <li>
          The supply of Goods which are, after delivery, according to their nature, inseparably
          mixed with other items.
        </li>
      </ul>
      <p>
        We reserve the right to refuse returns of any merchandise that does not meet the above
        return conditions in our sole discretion.
      </p>
      <p>
        Only regular priced Goods may be refunded. Unfortunately, Goods on discount cannot be
        refunded. This exclusion may not apply to You if it is not permitted by applicable law.
      </p>
      <h2>Returning Goods</h2>
      <p>
        You are responsible for the cost and risk of returning the Goods to Us. You should send the
        Goods at the following address:
      </p>
      <b>
        <p>Bebek, BÜ Güney Kampüsü, 34342 Beşiktaş/İstanbul</p>
      </b>
      <p>
        We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We
        recommend an insured and trackable mail service. We are unable to issue a refund without
        actual receipt of the Goods or proof of received return delivery.
      </p>
      <h2>Gifts</h2>
      <p>
        If the Goods were marked as a gift when purchased and then shipped directly to you, You'll
        receive a gift credit for the value of your return. Once the returned product is received, a
        gift certificate will be mailed to You.
      </p>
      <p>
        If the Goods weren't marked as a gift when purchased, or the gift giver had the Order
        shipped to themselves to give it to You later, We will send the refund to the gift giver.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions about our Returns and Refunds Policy, please contact us:{" "}
        <a href="mailto:hey@dorkodu.com">hey@dorkodu.com</a>
      </p>
    </Container>
  );
}
