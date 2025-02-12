import React, { useState } from 'react';

const Customers = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const customers = [
    {
      id: '123567',
      name: 'Patricia Semklo',
      email: 'patricia.semklo@xyz.com',
      location: '🇬🇧 London, UK',
      orders: 24,
      lastOrder: '#123567',
      spent: '$2,890.66',
      refunds: '-',
      image: '/user-36-01.jpg'
    },
    {
      id: '779812',
      name: 'Dominik Lamakani',
      email: 'dominik.lamakani@gmail.com',
      location: '🇩🇪 Dortmund, DE',
      orders: 77,
      lastOrder: '#779812',
      spent: '$14,767.04',
      refunds: '4',
      image: '/user-36-02.jpg'
    },
    {
      id: '889924',
      name: 'Ivan Mesaros',
      email: 'ivanm@gmail.com',
      location: '🇫🇷 Paris, FR',
      orders: 44,
      lastOrder: '#889924',
      spent: '$4,996.00',
      refunds: '1',
      image: '/user-36-03.jpg'
    },
    {
      id: '897726',
      name: 'Maria Martinez',
      email: 'martinezhome@gmail.com',
      location: '🇮🇹 Bologna, IT',
      orders: 29,
      lastOrder: '#897726',
      spent: '$3,220.66',
      refunds: '2',
      image: '/user-36-04.jpg'
    }
  ];

  const handleCheckbox = (e) => {
    const customerId = e.target.value;
    setSelectedItems(prev => {
      if (e.target.checked) {
        return [...prev, customerId];
      } else {
        return prev.filter(id => id !== customerId);
      }
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Customers ✨</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Add customer button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add Customer</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
        <header className="px-5 py-4">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">All Customers <span className="text-slate-400 dark:text-slate-500 font-medium">{customers.length}</span></h2>
        </header>
        <div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                <tr>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                    <div className="flex items-center">
                      <label className="inline-flex">
                        <span className="sr-only">Select all</span>
                        <input className="form-checkbox" type="checkbox" />
                      </label>
                    </div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Location</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-center">Orders</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-center">Last order</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-center">Total spent</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-center">Refunds</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-center">Actions</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                {customers.map(customer => (
                  <tr key={customer.id}>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select</span>
                          <input 
                            className="form-checkbox" 
                            type="checkbox" 
                            value={customer.id}
                            onChange={handleCheckbox}
                            checked={selectedItems.includes(customer.id)}
                          />
                        </label>
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-9 h-9 shrink-0 mr-2 sm:mr-3">
                          <img className="rounded-full" src={customer.image} width="36" height="36" alt={customer.name} />
                        </div>
                        <div className="font-medium text-slate-800 dark:text-slate-100">{customer.name}</div>
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left">{customer.location}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-center">{customer.orders}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left font-medium text-sky-500">{customer.lastOrder}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-center font-medium text-emerald-500">{customer.spent}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-center">{customer.refunds}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
                        <span className="sr-only">Menu</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="2" />
                          <circle cx="10" cy="16" r="2" />
                          <circle cx="22" cy="16" r="2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
