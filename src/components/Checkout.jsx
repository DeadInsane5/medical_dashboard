import CheckoutItem from "./CheckoutItem";

function Checkout(props) {
    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                <li><CheckoutItem name="Item 1" price="$100" /></li>
                <li><CheckoutItem name="Item 2" price="$200" /></li>
                <li><CheckoutItem name="Item 3" price="$300" /></li>
            </ul>
            <p>Total Amount: $600</p>
            <button>Proceed to Pay</button>
        </div>
    );
}

export default Checkout;