import React, { useEffect, useState } from 'react'
import DynamicTabs from '../../../Controler/Healper/DynmicTab'
import CustomerAdd from './AddCustomerSubComp/CustomerAdd';

export default function AddCoustmor() {
      const tabConfig = [
    { id: "profile", label: "Profile", component: CustomerAdd },
    // { id: "dashboard", label: "Dashboard", component: DashboardTab },
    // { id: "settings", label: "Settings", component: SettingsTab },
    // { id: "contacts", label: "Contacts", component: ContactsTab },
  ];

   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    console.log(e); // same as s in your original code
    console.log(e.currentTarget.dataset);
    setIsOpen((prev) => !prev);
  };

    return (

        <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
            <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
              <DynamicTabs tabs={tabConfig} fun={toggleMenu} />
            </div>
        </div>


    )
}
