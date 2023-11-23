import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import Loader from '../../components/loader/Loader';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(myContext);
  const { loading, order } = context;
  console.log(order);

  return (
    <Layout>
      {loading && <Loader />}
      <div className="h-full pt-10 mt-16">
        {order
          .filter(obj => obj.userid === userid)
          .map((userOrder, index) => (
            <div key={index} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              {userOrder.cartItems.map((item, itemIndex) => (
                
                <div key={itemIndex} className="rounded-lg md:w-2/3 mb-10">
                  <div className="border border-gray-100 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="w-full mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                        <textarea
                          value={item.description}
                          className="mt-1 text-xs text-gray-700 w-full h-[120px] resize-none outline-none"
                          readOnly
                        >
                          {item.description}
                        </textarea>
                        <p className="mt-1 text-xs text-gray-700">₹{item.price}</p>
                        <p className="text-sm flex justify-end">{userOrder.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        {order.filter(obj => obj.userid === userid).length === 0 && (
          <h2 className="text-center text-2xl text-gray-900 my-32 font-bold">No Order Yet!</h2>
        )}
      </div>
    </Layout>
  );
}

export default Order;
