import { shallowMount } from "@vue/test-utils";
import CartItem from "@/components/CartItem";

describe("CartItem.vue", () => {
    const dataItems =
    {
        "sku": "1",
        "name": "Test 1",
        "size": "small",
        "price": 10.99,
        "stockLevel": 10
    };

    it("should show the item name", () => {
        const wrapper = shallowMount(CartItem, {
            props: {
                item: dataItems
            }
        });
        expect(wrapper.find(".cart-table > b-col:first-child").text()).toContain(dataItems.name);
    });

    it("should show the item size", () => {
        const wrapper = shallowMount(CartItem, {
            props: {
                item: dataItems
            }
        });
        expect(wrapper.find(".cart-table > b-col:first-child").text()).toContain(dataItems.size);
    });



});