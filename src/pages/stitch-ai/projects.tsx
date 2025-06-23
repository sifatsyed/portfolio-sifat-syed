import Head from 'next/head'
import '../../styles/basehero.css';

export default function Projectss() {
    return (

        <>
            <Head>
                <title>Projectssss</title>
                <link rel="icon" href="data:image/x-icon;base64," />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
                />
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
            </Head>
            <body>
                <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
                    <div className="layout-container flex h-full grow flex-col">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f5] px-10 py-3">
                            <div className="flex items-center gap-4 text-[#111518]">
                                <div className="size-4">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Ava Portfolio</h2>
                            </div>
                            <div className="flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-9">
                                    <a className="text-[#111518] text-sm font-medium leading-normal" href="#">About</a>
                                    <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Projects</a>
                                    <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Contact</a>
                                </div>
                                <button
                                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f3f5] text-[#111518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                                >
                                    <div className="text-[#111518]" data-icon="List" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuASVqdQbYtlgTYCc42ejpEfULOctOZENCHsEhqtPo6sAdKXEiA9nnW8N1-k-Zqf__vV_Ybh2JGeYTCTi2UAR4kxNWO1-vZro_ZVu-CMuba9kTkoOobRK66FxVX2Vj9ftCE7RRF4Q5FwaTvS9w_nwwhlpu56NyUqWWkPCIA36fkZvXNM2AT3NfymSvyfEpliEgueT2lv8OODdvNp2hx9WRGFfkHO6wB0af-D63hCx0pOh0hmxusVwzjrfjSwM2M0XC2WcEaaZ7XsYX8")`
                                    }}
                                ></div>
                            </div>
                        </header>
                        <div className="px-40 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <div className="flex min-w-72 flex-col gap-3">
                                        <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Projects</p>
                                        <p className="text-[#607a8a] text-sm font-normal leading-normal">A selection of design projects showcasing my skills and experience.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                    <div className="flex flex-col gap-3 pb-3">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                            style={{
                                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbPsMuGRsqFcET252o9MqFzesBrj389rctbGDAPs1V9020-rwPanWQglsqMMe6_jVaNZdnV4mF5b_XVNDt1-Q7hgU0ENoG4YrKjJSIu748ZBcPyrDBGCkvqAPDGt3Ybjh_D4QPdIIngnjJB4n6LSHdWSvNKBkJ3vmOwK5ZlkU6_Q0tpBpD8JjR1r-7rTWE03tIq17lW-5rzBWvIJKZ_IS3AJj6vrTLegAr8CvgE0s3C9hr93uKWlZK0jU8RFEdUrNBy4PQHfEJRaA")`
                                            }}
                                        ></div>
                                        <div>
                                            <p className="text-[#111518] text-base font-medium leading-normal">Mobile App Redesign</p>
                                            <p className="text-[#607a8a] text-sm font-normal leading-normal">A complete redesign of a popular mobile application to improve user experience and engagement.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-3">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                            style={{
                                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCC0BRLEfdOCqSj1FeUAhQiHM8Ei2c5E4c3KjR1idObXZuXnvArtS4M30VoApgK8hnZXjja36929w9-YjqiBr3Lkvgx7H36bEKTBX9nRlVyfPiMkGVweyq0tcgiAV4bwypG8PAUvcFbk9hjI6_HQJL6u010UziGRNYBXIcyxFHtht7ajJvv2NORHcb_0YuloBecibJUTKwgaVNvxVAkHIL6uh_6K4p6w9MdmkxA0Sm-x_dVjrDxBnuhpj6HowcBldeWmhmo0Q4tudg")`
                                            }}
                                        ></div>
                                        <div>
                                            <p className="text-[#111518] text-base font-medium leading-normal">Website Design for a Startup</p>
                                            <p className="text-[#607a8a] text-sm font-normal leading-normal">Designing a modern and responsive website for a new tech startup.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-3">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                            style={{
                                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq7qDDRsXtnQFI2xJp8Jw2i3Yhe3ZWILAQrByOPhYm-q-VpHm-Spwm_oXQbgEAgbmJJTZ7OIHrAboouJbRqyGvFG49IDWiq0LPr_vke17YeJr-ofu5oSbt6VzKCmSvF7kfdb1I8RGsYc0KWEv96IdijyBP_LJj8VY2yobhZGZwBDlMH02CaO_cNWs5ljoGg5Vv5KbFIdtadCM1b4bPoBl-TzU_TRtzt8gFi9tRJbujBuNV-TJ7Djejowg-GbCAqkG5oXqI1GkWHkM")`
                                            }}
                                        ></div>
                                        <div>
                                            <p className="text-[#111518] text-base font-medium leading-normal">E-commerce Platform Design</p>
                                            <p className="text-[#607a8a] text-sm font-normal leading-normal">Creating a user-friendly e-commerce platform with a focus on seamless shopping experience.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-3">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                            style={{
                                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5jV0aGYetb_B8JohRYKfJ0_s_vjanJH4Tv4eS4Ggu4HwdS3xBnbEb8E3CeP5oePCti6gr3IUDX6BQicN1VugbyymTs4v6uPjHknqkDj_CaRv7_g5NkJu-yXKGXfhW4INW1c_PBdtwE-Bl-aNXjKywjzuJ9-SIt0QpVrcNk8uxVRP3LNvU2gul52rTZGK7IZYipMT1mZiJ60xh1yVL_B5kTsJrsY9ZyZ3XquoWNOUlRkAyshd7DzZV75xZcEAnIe59kvCoipRUWWM")`
                                            }}
                                        ></div>
                                        <div>
                                            <p className="text-[#111518] text-base font-medium leading-normal">Branding and Identity Project</p>
                                            <p className="text-[#607a8a] text-sm font-normal leading-normal">
                                                Developing a comprehensive brand identity for a local business, including logo, color palette, and style guide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="flex justify-center">
                            <div className="flex max-w-[960px] flex-1 flex-col">
                                <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <a href="#">
                                            <div className="text-[#607a8a]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-[#607a8a]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-[#607a8a]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <p className="text-[#607a8a] text-base font-normal leading-normal">@2024 Ava Portfolio. All rights reserved.</p>
                                </footer>
                            </div>
                        </footer>
                    </div>
                </div>
            </body>
        </>

    );
}
