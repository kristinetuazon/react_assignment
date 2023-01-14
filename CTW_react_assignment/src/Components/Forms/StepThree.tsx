import React, {
  type ReactElement,
  useState,
  useEffect,
  useRef,
  type MutableRefObject,
} from "react";
import { type Orders, type MenuItem } from "../../types/global";

type data = {
  orders: Orders[];
};
type stepThreeProps = data & {
  updateData: (data: Partial<data>) => void;
  filteredRestaurantMenu: MenuItem[];
};

const StepThree = (props: stepThreeProps): ReactElement => {
  const { orders, updateData, filteredRestaurantMenu } = props;
  const [orderItem, setOrderItem] = useState<Orders | null>(null);
  const [name, setName] = useState<string>("");
  const [numberOfServings, setNumberOfServings] = useState<string>("");


  useEffect(() => {
    if (name && numberOfServings) {
      setOrderItem({ name: name, numberOfServings: numberOfServings });
    }
  }, [name, numberOfServings, orders]);


  return (
    <>
      <div className="grid grid-cols-4  grid-rows-4 gap-x-5 place-items-center">
        <label className="col-span-2 font-body1 mb-2" htmlFor="meal">
          Select a dish:
        </label>

        <label htmlFor="numberOfServings" className="font-body1 mb-2">
          Servings:
        </label>

        <div></div>

        <select
          autoFocus
          className="col-span-2 text-center p-2 shadow-md w-[200px]"
          name="dish"
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="dish"
          aria-roledescription="list of options"
          aria-label="list of dishes"
          required
        >
          <option role="option" aria-selected="false" value="" key="0">
            ---
          </option>
          {filteredRestaurantMenu!.map((menuItem, index) => {
            return (
              <option
                role="option"
                aria-selected="false"
                value={menuItem.name}
                key={index + 100}
              >
                {menuItem.name}
              </option>
            );
          })}
        </select>

        <input
          className="font-body1 text-center p-2 shadow-md w-[70px]"
          name="numberOfServings"
          type="number"
          min="1"
          onChange={(e) => {
            setNumberOfServings(e.target.value);
          }}
          aria-roledescription="input"
          aria-label="number of servings input"
          required
        />

        <button
          type="button"
          onClick={() => {
            orders.push(orderItem!);

          }}
          className="row-span-1 shadow-sm bg-mustard p-2 uppercase rounded-full h-[50px] w-[50px]  font-heading hover:font-title hover:shadow-lg"
        >
          <p>+</p>
        </button>

        <table  className="col-span-4 row-span-2">
        <thead>
          <tr>
            <th
              scope="col"
              className="uppercase font-heading text-md px-6  text-center"
            >
              Dish name
            </th>
            <th scope="col" className="uppercase font-heading px-6 text-center">
              Servings
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,index) => {
            return (
              <tr key={index+100}>
                <th
                  scope="col"
                  className="capitalize font-body1 text-md px-6  text-center"
                >
                  {order.name}
                </th>
                <th
                  scope="col"
                  className="capitalize font-body1 px-6 text-center"
                >
                  {order.numberOfServings}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default StepThree;
