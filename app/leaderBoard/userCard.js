import Image from "next/image";
// import { useRecoilState } from "recoil";
// import { modalState } from "../atoms/modalAtom";
// import { selectedUserState } from "../atoms/selectedUserAtom";
// import { TableDataType } from "../types";
// import { parseName } from "../utils/parseName";
import Link from "next/link";

const UserCard = () => {
  //   const [isModalOpen, setModalOpen] = useRecoilState(modalState);
  //   const [userData, setUserData] = useRecoilState(selectedUserState);

  return (
    <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <p class="text-xs text-gray-600">Developer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
            <td class="px-4 py-3 text-sm border">6/4/2000</td>
          </tr>
          
    // <tr>
    //   <td className="p-5 border-b border-gray-200 bg-[#ffffff] lg:hidden">
    //     <p className="font-mainfont text-lg font-medium text-[#787a91] text-center">
    //       {3 + 4}
    //     </p>
    //   </td>
    //   <td className="border-b border-gray-200 bg-[#ffffff]">
    //     <p className="items-center font-codefont text-xl font-semibold text-[#1d4cb0] text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
    //       {/* # {data.rank} */}# 00
    //     </p>
    //   </td>
    //   <td className="p-5 border-b border-gray-200 bg-[#ffffff] w-1/2 lg:px-3 lg:py-4">
    //     <div className="flex items-center">
    //       <div className="flex-shrink-0 w-12 h-12 mr-5 lg:hidden">
    //         <Image
    //           className="w-full h-full rounded-full"
    //           //   src={data.avatar_url}
    //           src="/NAAC.png"
    //           //   alt={data.user_name}
    //           alt="userName"
    //           height={60}
    //           width={60}
    //         />
    //       </div>
    //       {/* <div>
    //         <p className="font-codefont text-xl font-medium text-[#3c434e] tracking-wide capitalize lg:text-lg md:text-base">
    //           {parseName(data.full_name) || (
    //             <span className="text-[#9ba4b4]">Name not found...</span>
    //           )}
    //         </p>
    //         <p className="font-curlfont text-base font-semibold text-[#787a91] lg:hidden">
    //           {data.college || (
    //             <span className="text-[#ff3838]">College not found...</span>
    //           )}
    //         </p>
    //       </div> */}
    //     </div>
    //   </td>
    //   <td className="p-5 border-b border-gray-200 bg-[#ffffff] lg:hidden">
    //     <Link
    //       //   href={data.user_url}
    //       href={"#"}
    //       target="_blank"
    //       rel="noreferrer"
    //       className="py-1 px-4 font-codefont text-base font-medium text-[#3c434e] bg-[#99feff] rounded-lg tracking-wide text-center"
    //     >
    //       {/* {data.user_name} */}
    //       userName
    //     </Link>
    //   </td>
    //   <td className="p-5 border-b text-center border-gray-200 bg-[#ffffff] lg:hidden">
    //     <p
    //       className="py-1 px-3 cursor-pointer font-curlfont text-base font-bold text-[#3c434e] w-fit hover:text-[#ffffff] hover:bg-[#385cf0] transition rounded-lg text-center"
    //       //   onClick={() => {
    //       //     setModalOpen(true);
    //       //     setUserData(data);
    //       //   }}
    //     >
    //       View All PRs
    //     </p>
    //   </td>
    //   <td className="p-5 border-b border-gray-200 bg-[#ffffff] text-center lg:px-3 lg:py-4 xs:hidden">
    //     <span className="font-codefont text-xl font-medium text-[#3c434e] lg:text-base">
    //       {/* {data.total_points} */}
    //       points
    //     </span>
    //   </td>
    // </tr>
  );
};

export default UserCard;
