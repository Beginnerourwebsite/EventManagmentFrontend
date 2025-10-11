import React from 'react'

export default function CustomerAdd() {
    function test(){
        alert("shriji")
    }
    return (
        <div className="block" id="step1" role="tabpanel" aria-labelledby="step1-tab">
            <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                    <div className="mb-3">
                        <label htmlFor="txtFirstNameBilling" className="label">Contact Person</label>
                        <input type="text" id="txtFirstNameBilling" name="txtFirstNameBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtCompanyBilling" className="label">Landline No.</label>
                        <input type="text" id="txtCompanyBilling" name="txtCompanyBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtAddress1Billing" className="label">Address 1</label>
                        <textarea id="txtAddress1Billing" name="txtAddress1Billing" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtCityBilling" className="label">Company Type</label>
                        <input type="text" id="txtCityBilling" name="txtCityBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtTelephoneBilling" className="label">Product Category</label>
                        <input type="text" id="txtTelephoneBilling" name="txtTelephoneBilling" className="form-control" />
                    </div>
                </div>{/*end col*/}
                <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                    <div className="mb-3">
                        <label htmlFor="txtStateProvinceBilling" className="label">Mobile No.</label>
                        <input type="text" id="txtStateProvinceBilling" name="txtStateProvinceBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtEmailAddressBilling" className="label">Email Address</label>
                        <input type="text" id="txtEmailAddressBilling" name="txtEmailAddressBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtAddress2Billing" className="label">Warehouse Address</label>
                        <textarea id="txtAddress2Billing" name="txtAddress2Billing" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtStateProvinceBilling" className="label">Live Market A/C</label>
                        <input type="text" id="txtStateProvinceBilling" name="txtStateProvinceBilling" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txtFaxBilling" className="label">Product Sub Category</label>
                        <input type="text" id="txtFaxBilling" name="txtFaxBilling" className="form-control" />
                    </div>
                </div>{/*end col*/}
                <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                    <div className>
                        <button type="button" onClick={test} id="step1Next" className="btn bg-blue-500 text-white hover:bg-blue-600 float-right">Next</button>
                    </div>
                </div>{/*end col*/}
            </div>{/*end grid*/}
        </div>
    )
}
