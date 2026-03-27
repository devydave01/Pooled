import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      {/* Hero Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-[#2E1A47] to-[#4A2D70] p-10 rounded-3xl text-white shadow-2xl shadow-[#2E1A47]/20 relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[200px]">account_balance_wallet</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Total Pool Balance</span>
            <div className="text-6xl font-black mt-4 tracking-tighter">₦142,850.00</div>
            <div className="flex gap-4 mt-10">
              <button className="bg-white text-[#2E1A47] px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#b4ebff] transition-colors">
                <span className="material-symbols-outlined text-lg">add</span>
                Add Funds
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all">
                Send Transfer
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f4f3f8] p-8 rounded-3xl flex flex-col justify-between border border-[#ccc4cf]/30">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-[#2E1A47]">Monthly Growth</h3>
              <span className="text-[#00677e] font-bold text-sm">+12.4%</span>
            </div>
            <p className="text-xs text-[#4a454e] mt-1">vs last month</p>
          </div>
          <div className="h-24 flex items-end gap-1 mt-6">
            <div className="flex-1 bg-[#2E1A47]/20 rounded-t-lg h-[40%]"></div>
            <div className="flex-1 bg-[#2E1A47]/20 rounded-t-lg h-[60%]"></div>
            <div className="flex-1 bg-[#2E1A47]/20 rounded-t-lg h-[45%]"></div>
            <div className="flex-1 bg-[#2E1A47]/20 rounded-t-lg h-[80%]"></div>
            <div className="flex-1 bg-[#2E1A47]/20 rounded-t-lg h-[55%]"></div>
            <div className="flex-1 bg-[#2E1A47] rounded-t-lg h-[95%]"></div>
          </div>
        </div>
      </section>

      {/* My Groups */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-extrabold text-[#2E1A47] tracking-tight">My Groups</h3>
          <button className="text-sm font-bold text-[#00677e] flex items-center gap-1 hover:underline flex-shrink-0">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Wedding Fund */}
          <div className="bg-white p-6 rounded-3xl border border-[#ccc4cf]/30 hover:shadow-xl hover:shadow-[#2E1A47]/5 transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#b4ebff] flex items-center justify-center text-[#001f27]">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
              <span className="bg-green-100 text-green-700 text-[10px] font-black uppercase px-3 py-1 rounded-full">Active</span>
            </div>
            <h4 className="font-bold text-lg mb-1">Wedding Fund</h4>
            <p className="text-sm text-[#4a454e] mb-6">Saving for the Tuscany ceremony.</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#2E1A47]">₦45,000 / ₦60,000</span>
                <span className="text-[#4a454e]">75%</span>
              </div>
              <div className="h-2 w-full bg-[#efedf3] rounded-full overflow-hidden">
                <div className="h-full bg-[#00677e] w-[75%] rounded-full"></div>
              </div>
            </div>
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtN2SQjcL0BJatmzeXT_lRVPaJj9QSCxKgk41hfhJ9m6pKRpCEY4uApewivWmoK7aBO02aqgzRUamxlnk26CNYFeTxv7rf7hAVJoXIjGYcTQ9KGFvZz0YilootmbAy-64xNel-NdekdUWG123Sg5_w8Rl67wfC7LwhJKMtJgUoRrWoxnSpV8SbRCW_ly2FHqLvgk2Lb_otC31u3pICm6Tzjr5lPDGFkXhhiLeEjklMMN0Nad0OsMkrdjV45Uza9FV4304h4FAUTBN" alt="Member" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA8qTdzJkJ38CgOdrmEkwEANsUbRtHODOUZizMn1JxWmZD2nYblUAA10cnYvqiBiyIVQbn88wqzGJTe2N8ftVO-2ReuMaJWR8oNIAGamKVQUCxhPAK84TbV21KYicIWTtQ4lnQ_anQnBgueaE18ReMX-FTS4W_qIEn7mno41dFLd3r3L303gfl1hzPqjDKXLbhuESmYOYS_nkHyZgQfAK6k1wKsiNm9zcmInZaUBJtJseeizW1rymKfq0w3l_myPiUDyWlY0CRRCUh" alt="Member" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e9e7ed] flex items-center justify-center text-[10px] font-bold">+3</div>
            </div>
          </div>
          
          {/* Road Trip */}
          <div className="bg-white p-6 rounded-3xl border border-[#ccc4cf]/30 hover:shadow-xl hover:shadow-[#2E1A47]/5 transition-all">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#4A2D70]/10 flex items-center justify-center text-[#2E1A47]">
                <span className="material-symbols-outlined text-2xl">directions_car</span>
              </div>
            </div>
            <h4 className="font-bold text-lg mb-1">Road Trip</h4>
            <p className="text-sm text-[#4a454e] mb-6">Cross-country adventure 2024.</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#2E1A47]">₦2,850 / ₦5,000</span>
                <span className="text-[#4a454e]">57%</span>
              </div>
              <div className="h-2 w-full bg-[#efedf3] rounded-full overflow-hidden">
                <div className="h-full bg-[#2E1A47] w-[57%] rounded-full"></div>
              </div>
            </div>
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqkRf4rFT-MoongaD9eTglOHkFCtFfmXJqF3FVNCLTHFZoomTSAXqLQiyL9BNlDcOYy9YTXo5zMxML3sBFNss-8hVfR3eBAQY_cM98AuXmjFiqB0Q46x8vHRJQrwyCN3KXZ1m7Mja_-QdH0XvH_MHtMyNR3wZbmNdz1IGhp92loT4sgyocjcj4Uc8fZ2_qxUpQxlJ9d3SpM-CNR5tWgWCkpsRR3Z5lP5M0j_PQL8VnbjmxqX8NmmxQKb1P8Sj-8-f7OtnVP_uTcXVJ" alt="Member" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e9e7ed] flex items-center justify-center text-[10px] font-bold">+5</div>
            </div>
          </div>

          {/* Investment Club */}
          <div className="bg-white p-6 rounded-3xl border border-[#ccc4cf]/30 hover:shadow-xl hover:shadow-[#2E1A47]/5 transition-all">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
            </div>
            <h4 className="font-bold text-lg mb-1">Investment Club</h4>
            <p className="text-sm text-[#4a454e] mb-6">Diversified tech & green energy.</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#2E1A47]">₦95,000 / ₦100k Goal</span>
                <span className="text-[#4a454e]">95%</span>
              </div>
              <div className="h-2 w-full bg-[#efedf3] rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 w-[95%] rounded-full"></div>
              </div>
            </div>
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPf9FUh-hWM5ZEceNSQ03Krw6R7bYRtbxs11pXK67E_Cuxb7hiHmyZi9STsZ5qDrzeXbpBXE7aR79ja2ZpeG4rYPjlkqoDUj9JHKGxAK6Ng3N6KDyyv9lKxmKfmCP4Ooi0_Uy-d8sPCfBcDDzask1rXcsh17viRc_x5TBh97HYppIxx322VU9DD3St77kiMjf8s0RAXXVVWGDqlH3hF_XbFrIlQ9aSvdPOljjqEm1UDJ3nInu9CoD0DWMAid-UkaLnKk6GiRyjfNWX" alt="Member" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2WSwxdGk8vunNHicYHfbkEzF0MzedWo-X1IgquF2iGAJMvIxMHHUGVvoRtagDoPUqxGhDstFqqIe_KBN12MCaGjphLpxxe5e7a45NGrNaNoEnG4T-XWwgM3mEePQGsEYWLLKVAungtqcKymo8HtfZgBpQmEgZwfi6WEz_s8DoXHWCCxdQQ1RIgi7F3L5qJS0qlC9pi4lRtbOzM8FANyPEYd6tpRCTx2CG12iZeeqkkV-Z1rdzoDSG5f9eVSdSVWY8OScgIdv5hiv" alt="Member" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e9e7ed] flex items-center justify-center text-[10px] font-bold">+12</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity & Approvals */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Approvals */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-[#2E1A47] mb-6 flex items-center gap-2">
            Pending Approvals
            <span className="w-5 h-5 bg-[#ba1a1a] text-white text-[10px] flex items-center justify-center rounded-full">1</span>
          </h3>
          <div className="bg-white p-6 rounded-3xl border border-[#ccc4cf]/30 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbFRmEsL93FONsa0dBadbrtC_y7QjpaE0UwF2AByEe8751pNMNgbtoumaYsqM1sk4rR7vkzcY0ot5ac1Hli_LvVIlw-8AKV6dPlEM765PfSTdtaOwUU-GlSAroIgrG4D5BYLP6hXmuixfPjqD2avA1dZKabL_KE95f5ZWWjdIoHm8jD7KPsps-Mp27Sx8tjdT2gsNAarcDoe3Hn3a9hifFZa4saLK-Q0pr9EHi51GYvFgyFCh3euX-sJhfRxlFop-RJ2ux15QGOhH8" alt="Sarah Chen" />
              <div>
                <p className="text-sm font-bold text-[#2E1A47]">Sarah Chen</p>
                <p className="text-xs text-[#4a454e]">Withdrawal Request</p>
              </div>
            </div>
            <div className="bg-[#efedf3] px-4 py-4 rounded-2xl mb-6">
              <span className="text-[10px] font-bold text-[#4a454e] uppercase tracking-widest">Road Trip</span>
              <div className="text-2xl font-black text-[#2E1A47] mt-1">₦450.00</div>
              <p className="text-xs text-[#4a454e] mt-2 italic">"Gas & snacks for the Utah stretch"</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#2E1A47] text-white py-3 rounded-xl text-xs font-bold hover:brightness-110 transition-all">Approve</button>
              <button className="bg-[#e3e2e7] text-[#1a1b1f] py-3 rounded-xl text-xs font-bold hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] transition-all">Decline</button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-[#2E1A47] mb-6">Recent Activity</h3>
          <div className="bg-white rounded-3xl border border-[#ccc4cf]/30 overflow-hidden">
            <div className="divide-y divide-[#ccc4cf]/20">
              {/* Activity Item 1 */}
              <div className="p-5 flex items-center justify-between hover:bg-[#efedf3]/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">add_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2E1A47]">Contribution: Wedding Fund</p>
                    <p className="text-xs text-[#4a454e]">Alex Rivera added ₦500.00</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#4a454e] uppercase">Today, 2:45 PM</p>
                </div>
              </div>
              
              {/* Activity Item 2 */}
              <div className="p-5 flex items-center justify-between hover:bg-[#efedf3]/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">group_add</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2E1A47]">New Member Joined</p>
                    <p className="text-xs text-[#4a454e]">Jordan Smith joined Investment Club</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#4a454e] uppercase">Yesterday</p>
                </div>
              </div>
              
              {/* Activity Item 3 */}
              <div className="p-5 flex items-center justify-between hover:bg-[#efedf3]/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2E1A47]">Withdrawal: Road Trip</p>
                    <p className="text-xs text-[#4a454e]">Marc O. spent ₦125.40 at Shell Oil</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#4a454e] uppercase">Oct 24</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-[#efedf3]/50 text-xs font-bold text-[#2E1A47] hover:bg-[#efedf3] transition-colors">
              View All Activity
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
