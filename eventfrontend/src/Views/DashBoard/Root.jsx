// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers, FaStar } from "react-icons/fa";
import PageHeader from "../../Controler/Common/PageHeader";

export default function Home() {

  const breadcrumb = [
    { label: "Dashboard" }
   ];
  return (
    <>
      <PageHeader title="Dashboard" breadcrumb={breadcrumb}/>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4  mb-4">
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-3  ">
          <div className="h-full bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden grid md:gap-4 lg:gap-2 xl:gap-4 md:grid-cols-1 lg:grid-cols-4">
            <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 self-center">
              <img src="assets/images/widgets/bg-1.jpg" alt className="w-full h-36 rounded-md" />
              <img src="assets/images/users/avatar-9.jpg" alt className="p-1 mb-2 mx-auto rounded-full h-32 -mt-20 border-2 border-gray-50 dark:border-gray-700" />
              <h3 className="text-slate-800 dark:text-slate-100 text-center text-xl md:text-xl lg:text-lg xl:text-xl font-bold leading-8">
                T-Wind#309</h3>
              <p className="text-xs text-slate-400 text-center font-medium mb-5">@Martin Gibson</p>
              <div className="grid grid-cols-4 my-3 border border-dashed rounded-md dark:border-slate-700">
                <div className="col-span-2 border-r border-dashed border-slate-300 dark:border-slate-700">
                  <div className="text-center text-slate-400 text-base md:text-base lg:text-sm xl:text-base font-medium py-3">
                    <p className="text-xs text-slate-400">Current Bid</p>
                    <h6 className="text-lg font-medium text-slate-700 dark:text-slate-400">1.55 ETH</h6>
                  </div>
                </div>
                <div className="col-span-2 text-center py-2 self-center">
                  <p className="text-xs text-slate-400 font-medium">Auction Duration</p>
                  <div className="clockbox dark:text-slate-400" data-date="December 22, 2022 21:14:01">
                    <div>
                      <span className="days text-lg font-medium mr-2" />
                      <span className="hours text-lg font-medium mr-2" />
                      <span className="minutes text-lg font-medium mr-2" />
                      <span className="seconds text-lg font-medium" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-2">
                <button className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Start
                  Auction</button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-4 grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-2">
            <div className="card bg-[url('../images/widgets/c.html')] bg-no-repeat w-full">
              <div className="card-body p-8">
                <img src="assets/images/widgets/boa.png" alt className="w-20 mb-7 mt-5" />
                <h5 className="text-white font-medium text-xl">**** **** **** 3235</h5>
                <div className="flex justify-between">
                  <p className="text-slate-50 font-medium">Maria Gibson</p>
                  <h6 className="mb-0 text-slate-50 font-medium">Exp: <span className="text-slate-50">20/28</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="card mb-4 relative overflow-hidden bg-[url('../images/widgets/p-1.html')] bg-no-repeat bg-contain">
              <div className="card-body">
                <div className="flex justify-between xl:gap-x-2 items-cente">
                  <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                    <i className="ti ti-coin text-3xl" />
                  </div>
                  <div className="self-center ml-auto">
                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-300">$24948</h3>
                    <p className="text-gray-400 mb-0 font-medium">Revanue</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative overflow-hidden bg-[url('../images/widgets/p-1.html')] bg-no-repeat bg-contain">
              <div className="card-body">
                <div className="flex justify-between xl:gap-x-2 items-cente">
                  <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                    <i className="ti ti-brand-open-source text-3xl" />
                  </div>
                  <div className="self-center ml-auto">
                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-300">12.33</h3>
                    <p className="text-gray-400 mb-0 font-medium">Spending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="card mb-4 relative overflow-hidden bg-[url('../images/widgets/p-1.html')] bg-no-repeat bg-contain">
              <div className="card-body">
                <div className="flex justify-between xl:gap-x-2 items-cente">
                  <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                    <i className="ti ti-currency-ethereum text-3xl" />
                  </div>
                  <div className="self-center ml-auto">
                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-300">+12.3%</h3>
                    <p className="text-gray-400 mb-0 font-medium">ROI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card relative overflow-hidden bg-[url('../images/widgets/p-1.html')] bg-no-repeat bg-contain">
              <div className="card-body">
                <div className="flex justify-between xl:gap-x-2 items-cente">
                  <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                    <i className="ti ti-chart-arrows-vertical text-3xl" />
                  </div>
                  <div className="self-center ml-auto">
                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-300">24.44</h3>
                    <p className="text-gray-400 mb-0 font-medium">Estimated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-5">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tasks Performance</h4>
            </div>
            <div className="card-body">
              <div id="NFTs" className="apex-charts" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
        <div className="col-span-3">
          <div className="w-full relative overflow-hidden">
            <div className="p-0 xl:p-4">
              <div className="mb-4 border-b border-dashed border-gray-200 dark:border-gray-700 flex flex-wrap justify-start lg:justify-between">
                <ul className="flex flex-wrap mb-5 lg:-mb-px" id="myTab" data-tabs-toggle="#myTabContent" role>
                  <li className="mr-2" role="presentation">
                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="Tranding-tab" data-tabs-target="#Tranding" type="button" role="tab" aria-controls="Tranding" aria-selected="false">Tranding NFTs</button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="Auctions-tab" data-tabs-target="#Auctions" type="button" role="tab" aria-controls="Auctions" aria-selected="true">Hot Auctions</button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="Recent_Bid-tab" data-tabs-target="#Recent_Bid" type="button" role="tab" aria-controls="Recent_Bid" aria-selected="false">Recent Bid</button>
                  </li>
                  <li role="presentation">
                    <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="Creators-tab" data-tabs-target="#Creators" type="button" role="tab" aria-controls="Creators" aria-selected="false">Best Creators</button>
                  </li>
                </ul>
                <div className="self-center">
                  <ul className="flex flex-wrap mb-5 lg:-mb-px" id="Categories" data-tabs-toggle="#NFT_Cat" role="tablist">
                    <li className="mr-2" role="presentation">
                      <button className="inline-block py-1 px-4 text-xs font-medium text-center text-gray-500 rounded-lg border-2 border-transparent hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" id="Art-tab" data-tabs-target="#Art" type="button" role="tab-pill" aria-controls="Art" aria-selected="false">🔥 Art</button>
                    </li>
                    <li className="mr-2" role="presentation">
                      <button className="inline-block py-1 px-4 text-xs font-medium text-center text-gray-500 rounded-lg border-2 border-transparent hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 active" id="Music-tab" data-tabs-target="#Music" type="button" role="tab-pill" aria-controls="Music" aria-selected="true">🎵 Music</button>
                    </li>
                    <li className="mr-2" role="presentation">
                      <button className="inline-block py-1 px-4 text-xs font-medium text-center text-gray-500 rounded-lg border-2 border-transparent hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" id="Games-tab" data-tabs-target="#Games" type="button" role="tab-pill" aria-controls="Games" aria-selected="false">🎲 Games</button>
                    </li>
                    <li role="presentation">
                      <button className="inline-block py-1 px-4 text-xs font-medium text-center text-gray-500 rounded-lg border-2 border-transparent hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" id="Photography-tab" data-tabs-target="#Photography" type="button" role="tab-pill" aria-controls="Photography" aria-selected="false">🤳 Photography</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="myTabContent">
                <div className="hidden" id="Tranding" role="tabpanel" aria-labelledby="Tranding-tab">
                  <div className="grid md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-10 gap-4">
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 top-0 left-0 z-10">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-8.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Timeless Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@AllanRuiz</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.58 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-9.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">King Dog</h6>
                              <span className="text-xs text-slate-400 font-medium block">@CarlJean</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.64 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-5.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Mmoking Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JackCroy</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.34 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-2.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Smoker Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@MiguelTaylor</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.99 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-1.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Queen Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JamesWalker</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.84 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="" id="Auctions" role="tabpanel" aria-labelledby="Auctions-tab">
                  <div className="grid md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-10 gap-4">
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-1.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Timeless Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@AllanRuiz</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.58 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-2.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">King Dog</h6>
                              <span className="text-xs text-slate-400 font-medium block">@CarlJean</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.64 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-3.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Mmoking Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JackCroy</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.34 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-4.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Smoker Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@MiguelTaylor</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.99 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-5.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Queen Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JamesWalker</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.84 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-6.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Timeless Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@AllanRuiz</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.58 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-7.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">King Dog</h6>
                              <span className="text-xs text-slate-400 font-medium block">@CarlJean</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.64 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-8.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Mmoking Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JackCroy</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.34 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-9.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Smoker Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@MiguelTaylor</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.99 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-10.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Queen Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JamesWalker</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.84 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden" id="Recent_Bid" role="tabpanel" aria-labelledby="Recent_Bid-tab">
                  <div className="grid md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-10 gap-4">
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-6.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Timeless Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@AllanRuiz</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.58 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-7.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">King Dog</h6>
                              <span className="text-xs text-slate-400 font-medium block">@CarlJean</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.64 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-8.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Mmoking Ape
                                Club</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JackCroy</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.34 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-9.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Smoker Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@MiguelTaylor</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.99 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body relative">
                          <a href="#" className="block">
                            <div className="absolute border-2 border-slate-200 bg-slate-300 bg-opacity-60 rounded px-3 left-0">
                              <div className="clockbox" data-date="December 22, 2022 21:14:01">
                                <div>
                                  <span className="days text-sm font-medium mr-1" />
                                  <span className="hours text-sm font-medium mr-1" />
                                  <span className="minutes text-sm font-medium mr-1" />
                                  <span className="seconds text-sm font-medium" />
                                </div>
                              </div>
                            </div>
                            <img src="assets/images/widgets/nft-10.png" alt className="rounded-md" />
                          </a>
                        </div>
                        <div className="card-body pt-0">
                          <div className="flex justify-between">
                            <div className="self-center">
                              <h6 className="font-medium text-[15px] text-slate-700 block dark:text-slate-300">Queen Cat</h6>
                              <span className="text-xs text-slate-400 font-medium block">@JamesWalker</span>
                            </div>
                            <div className="self-center">
                              <span className="text-xs text-slate-400 font-medium">Current Bid</span>
                              <h6 className="font-medium text-sm text-slate-700 block dark:text-slate-400">0.84 ETH</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden" id="Creators" role="tabpanel" aria-labelledby="Creators-tab">
                  <div className="grid md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-10 gap-4">
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-1.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">James Walker
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-2.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Beatrice Smith
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-3.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Marlon Martin
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-4.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Manuel Browne
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-5.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">William Eastman
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-6.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Jonathan Ngo
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-7.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Derrick Weiss
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-8.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Antonio Cooke
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-9.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Robert Chase
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-10 md:col-span-3 lg:col-span-3 xl:col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <a href="#">
                            <div className="flex">
                              <img src="assets/images/users/avatar-1.jpg" alt className="h-14 w-1h-14 rounded-full" />
                              <span className="absolute left-0 h-3 w-3 rounded-full bg-green-500 p-2 flex justify-center items-center border-2 border-white"><i className="ti ti-check text-white" /></span>
                              <div className="flex-shrink self-center ml-2">
                                <h6 className="font-medium text-base text-slate-700 block dark:text-slate-300">Roberto Bowen
                                </h6>
                                <span className="text-xs text-slate-400 font-medium block">$2300,900</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
<div id="controls-carousel" className="relative w-full" data-carousel="static">
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    </div>
  </div>
  <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>


            </div>
          </div>
        </div>
      </div>




    </>);
}
