import React from 'react'

export default function AddCoustmor() {
    return (

        <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
            <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
                <div className="card h-full">
                    <div className="card-header">
                        <h4 className="card-title">Title</h4>
                    </div>{/*end card-header*/}
                    <div className="card-body pt-0">
                        <div className="mb-4 border-b border-dashed border-gray-200 dark:border-gray-700 flex flex-wrap justify-start lg:justify-between">
                            <ul className="flex flex-wrap mb-5 lg:-mb-px" id="myTab" data-tabs-toggle="#myTabContent" role>
                                <li className="mr-2" role="presentation">
                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 border-gray-100 dark:border-gray-700" id="step1-tab" data-tabs-target="#step1" type="button" role="tab" aria-controls="step1" aria-selected="false">Seller Details</button>
                                </li>
                                <li className="mr-2" role="presentation">
                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500" id="step2-tab" data-tabs-target="#step2" type="button" role="tab" aria-controls="step2" aria-selected="true">Company Document</button>
                                </li>
                                <li className="mr-2" role="presentation">
                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 border-gray-100 dark:border-gray-700" id="step3-tab" data-tabs-target="#step3" type="button" role="tab" aria-controls="step3" aria-selected="false">Bank Details</button>
                                </li>
                                <li role="presentation">
                                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 border-gray-100 dark:border-gray-700"
                                     id="step4-tab" data-tabs-target="#step4" type="button" role="tab" aria-controls="step4" aria-selected="false">Confirm Detail</button>
                                </li>
                            </ul>
                        </div>
                        <div id="myTabContent">
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
                                            <button type="button" id="step1Next" className="btn bg-blue-500 text-white hover:bg-blue-600 float-right">Next</button>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end grid*/}
                            </div>{/*end tab-pan*/}
                            <div className="hidden" id="step2" role="tabpanel" aria-labelledby="step2-tab">
                                <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="txtFirstNameShipping" className="label">PAN Card</label>
                                            <input type="text" id="txtFirstNameShipping" name="txtFirstNameShipping" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtCompanyShipping" className="label">CST No.</label>
                                            <input type="text" id="txtCompanyShipping" name="txtCompanyShipping" className="form-control" />
                                        </div>
                                        <div className="mb-3 md:mb-0">
                                            <label htmlFor="txtCityShipping" className="label">Company UIN</label>
                                            <input type="text" id="txtCityShipping" name="txtCityShipping" className="form-control" />
                                        </div>
                                    </div>{/*end col*/}
                                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="txtLastNameShipping" className="label">VAT/TIN No.</label>
                                            <input type="text" id="txtLastNameShipping" name="txtLastNameShipping" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtEmailAddressShipping" className="label">Service Tax No.</label>
                                            <input type="text" id="txtEmailAddressShipping" name="txtEmailAddressShipping" className="form-control" />
                                        </div>
                                        <div className="mb-3 md:mb-0">
                                            <label htmlFor="txtStateProvinceShipping" className="label">Declaration</label>
                                            <input type="text" id="txtStateProvinceShipping" name="txtStateProvinceShipping" className="form-control" />
                                        </div>
                                    </div>{/*end col*/}
                                    <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                                        <div className>
                                            <button type="button" id="step2Prev" className="btn bg-slate-400 text-white hover:bg-slate-500 float-left">Previous</button>
                                            <button type="button" id="step2Next" className="btn bg-blue-500 text-white hover:bg-blue-600 float-right">Next</button>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end grid*/}
                            </div>{/*end tab-pan*/}
                            <div className="hidden" id="step3" role="tabpanel" aria-labelledby="step3-tab">
                                <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="txtNameCard" className="label">Name on Card</label>
                                            <input type="text" id="txtNameCard" name="txtNameCard" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtCreditCardNumber" className="label">Credit Card Number</label>
                                            <input type="text" id="txtCreditCardNumber" name="txtCreditCardNumber" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtExpirationDate" className="label">Expiration Date</label>
                                            <input type="text" id="txtExpirationDate" name="txtExpirationDate" className="form-control" />
                                        </div>
                                    </div>{/*end col*/}
                                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value>--Please Select--</option>
                                                <option value="AE">American Express</option>
                                                <option value="VI">Visa</option>
                                                <option value="MC">MasterCard</option>
                                                <option value="DI">Discover</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtCardVerificationNumber" className="label">Verification Number</label>
                                            <input type="text" id="txtCardVerificationNumber" name="txtCardVerificationNumber" className="form-control" />
                                        </div>
                                    </div>{/*end col*/}
                                    <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                                        <div className>
                                            <button type="button" id="step3Prev" className="btn bg-slate-400 text-white hover:bg-slate-500 float-left">Previous</button>
                                            <button type="button" id="step3Next" className="btn bg-blue-500 text-white hover:bg-blue-600 float-right">Next</button>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end grid*/}
                            </div>{/*end tab-pan*/}
                            <div className="hidden" id="step4" role="tabpanel" aria-labelledby="step4-tab">
                                <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-12">
                                        <div className="flex items-center">
                                            <input id="flexCheckDefault" type="checkbox" className="checkbox ring-0 rounded border-gray-300 checked:border-primary-500 focus:outline-none focus:shadow-none ring-offset-0" />
                                            <label htmlFor="flexCheckDefault" className="self-center ml-1 dark:text-slate-400">
                                                I agree with the Terms and Conditions.
                                            </label>
                                        </div>
                                    </div>{/*end col*/}
                                    <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                                        <div className>
                                            <button type="button" id="step4Prev" className="btn bg-slate-400 text-white hover:bg-slate-500 float-left">Previous</button>
                                            <button type="button" id="step4Finish" className="btn bg-red-500 text-white hover:bg-red-600 float-right">Finish</button>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end grid*/}
                            </div>
                        </div>
                    </div>{/*end card-body*/}
                </div> {/*end card*/}
            </div>{/*end col*/}
        </div>


    )
}
