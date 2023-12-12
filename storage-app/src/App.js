import Router, { Switch, Link } from 'react-router-dom'
export default function App() {
  return (
    <div class="w-[20000px] h-[982px] relative bg-slate-900">
  <div class="w-[1450px] h-[740px] left-[200px] top-[174px] absolute bg-indigo-300 rounded-[40px] border border-black"></div>
  <div class="w-[2000px] h-[110px] left-[6px] top-[0px] absolute bg-blue-200 rounded"></div>
  <div class="w-[186px] h-[70px] left-[1500px] top-[24px] absolute">
    <div class="w-[186px] h-[70px] left-0 top-0 absolute bg-slate-500 rounded-[10px]"></div>
    <div class="left-[24px] top-[11px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">LOG OUT</div>
  </div>
  <div class="w-[186px] h-[70px] left-[431px] top-[24px] absolute">
    <div class="w-[186px] h-[70px] left-[250px] top-0 absolute bg-blue-200 rounded-[10px] border-4 border-slate-500"></div>
    <div class="w-[186px] left-[250px] top-[17px] absolute text-center text-slate-500 text-2xl font-normal font-['Poppins']">STORAGE</div>
  </div>
  <div class="w-[186px] h-[72px] left-[663px] top-[23px] absolute">
    <div class="w-[186px] h-[70px] left-[250px] top-[1px] absolute bg-blue-200 rounded-[10px] border-4 border-slate-500"></div>
    <div class="w-[186px] left-[250px] top-0 absolute text-center text-slate-500 text-2xl font-normal font-['Poppins']">DELIVERED ITEMS</div>
  </div>
  <div class="w-[186px] h-[72px] left-[895px] top-[24px] absolute">
    <div class="w-[186px] h-[70px] left-[250px] top-0 absolute bg-blue-200 rounded-[10px] border-4 border-slate-500"></div>
    <div class="w-[186px] left-[250px] top-0 absolute text-center text-slate-500 text-2xl font-normal font-['Poppins']">RECIEVE DELIVERY</div>
  </div>
  <div class="w-[1450px] h-[98px] left-[200px] top-[176px] absolute bg-slate-400 rounded-tl-[40px] rounded-tr-[40px]"></div>
  <div class="w-[1198.42px] h-[50px] left-[250px] top-[200px] absolute">
    <div class="w-[221.36px] h-[50px] left-0 top-0 absolute">
    </div>
    <div class="w-[236.79px] h-[50px] left-[241px] top-0 absolute bg-slate-500 rounded-[10px]"></div>
    <div class="w-[230.51px] h-[50px] left-[495px] top-0 absolute">
      <div class="w-[230.51px] h-[50px] left-0 top-0 absolute bg-slate-500 rounded-[10px]"></div>
      <div class="w-[169.79px] h-[34.29px] left-[43.40px] top-[8px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Quantity</div>
    </div>
    <div class="w-[453.42px] h-[50px] left-[745px] top-0 absolute">
      <div class="w-[226.45px] h-[50px] left-0 top-0 absolute bg-slate-500 rounded-[10px]"></div>
      <div class="w-[211.42px] h-[50px] left-[430px] top-0 absolute bg-slate-500 rounded-[10px]"></div>
      <div class="w-[158.66px] h-[34.29px] left-[33.73px] top-[0px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Photo</div>
      <div class="w-[158.66px] h-[34.29px] left-[460px] top-[8px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">In stock</div>
    </div>
  </div>
  <div class="w-[1198.42px] h-[50px] left-[250px] top-[200px] absolute">
    <div class="w-[221.36px] h-[50px] left-0 top-0 absolute">
      <div class="w-[221.36px] h-[50px] left-0 top-0 absolute bg-slate-500 rounded-[10px]"></div>
      <div class="w-[115.44px] h-[34.29px] left-[52.37px] top-[0px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Date</div>
    </div>
    <div class="w-[236.79px] h-[50px] left-[241px] top-0 absolute bg-slate-500 rounded-[10px]"></div>
    <div class="w-[230.51px] h-[50px] left-[495px] top-0 absolute">
      <div class="w-[230.51px] h-[50px] left-0 top-0 absolute bg-slate-500 rounded-[10px]"></div>
      <div class="w-[169.79px] h-[34.29px] left-[35px] top-[0px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Quantity</div>
    </div>
   </div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[364px] absolute bg-slate-400"></div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[451px] absolute bg-slate-400"></div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[546px] absolute bg-slate-400"></div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[641px] absolute bg-slate-400"></div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[736px] absolute bg-slate-400"></div>
  <div class="w-[1448px] h-[5px] left-[201px] top-[831px] absolute bg-slate-400"></div>
  <div class="w-[161px] h-[50px] left-[1450px] top-[200px] absolute bg-slate-500 rounded-[10px]"></div>
  <div class="left-[1500px] top-[200px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Add</div>
  <div class="left-[560px] top-[200px] absolute text-center text-white text-[32px] font-normal font-['Poppins']">Amount</div>
</div>
  )
}