import Head from 'next/head';
import '../../styles/basehero.css';

export default function BaseExp() {
    return (
        <>            
        <Head>
            <title>Base Exp</title>
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
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f4] px-10 py-3">
                            <div className="flex items-center gap-4 text-[#121517]">
                                <div className="size-4">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <h2 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em]">Sophie's Portfolio</h2>
                            </div>
                            <div className="flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-9">
                                    <a className="text-[#121517] text-sm font-medium leading-normal" href="#">About</a>
                                    <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Projects</a>
                                    <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Experience</a>
                                    <a className="text-[#121517] text-sm font-medium leading-normal" href="#">Contact</a>
                                </div>
                                <button
                                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f3f4] text-[#121517] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                                >
                                    <div className="text-[#121517]" data-icon="Globe" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8R6q03aNMmbknxTVyQtDr18Ygr2o9zlDFnycdI4y0Zz1XrONmu_JYX0bUCDWRwxbY1-KL-JmdZ0wBWx9c1b8eeb01TNyv6IZU4o3zYp5xpIZuSzCzi1wiM7Py32cp_po1-NTKKol0qP-6_amkXy0BYWr1rqWs_ik_35dshlrhM7fcpqD02MUtf163HDydUClUCRhedmsDMQ9ArDgHL1_GFqT9pTo-TY0HuUg5xHXAIlwC2xmcXlR6WLTcr8XU-YFXDPzcG1D15IY")`
                                    }}
                                ></div>
                            </div>
                        </header>
                        <div className="px-40 flex flex-1 justify-center py-5">
                            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <div className="flex min-w-72 flex-col gap-3">
                                        <p className="text-[#121517] tracking-light text-[32px] font-bold leading-tight">Experience</p>
                                        <p className="text-[#677883] text-sm font-normal leading-normal">A timeline of my professional journey, highlighting key roles and achievements.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                                    <div className="flex flex-col items-center gap-1 pt-3">
                                        <div className="text-[#121517]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="w-[1.5px] bg-[#dde1e4] h-2 grow"></div>
                                    </div>
                                    <div className="flex flex-1 flex-col py-3">
                                        <p className="text-[#121517] text-base font-medium leading-normal">Senior Product Designer at Tech Innovators Inc.</p>
                                        <p className="text-[#677883] text-base font-normal leading-normal">2020 - Present</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-[1.5px] bg-[#dde1e4] h-2"></div>
                                        <div className="text-[#121517]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="w-[1.5px] bg-[#dde1e4] h-2 grow"></div>
                                    </div>
                                    <div className="flex flex-1 flex-col py-3">
                                        <p className="text-[#121517] text-base font-medium leading-normal">Product Designer at Creative Solutions Co.</p>
                                        <p className="text-[#677883] text-base font-normal leading-normal">2018 - 2020</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 pb-3">
                                        <div className="w-[1.5px] bg-[#dde1e4] h-2"></div>
                                        <div className="text-[#121517]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col py-3">
                                        <p className="text-[#121517] text-base font-medium leading-normal">Junior Designer at Design Dynamics Ltd.</p>
                                        <p className="text-[#677883] text-base font-normal leading-normal">2016 - 2018</p>
                                    </div>
                                </div>
                                <h2 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">UI/UX Design</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Interaction Design</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">User Research</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Prototyping</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Wireframing</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Design Systems</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Figma</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Sketch</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Adobe Creative Suite</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Agile Methodologies</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Product Strategy</p>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-4">
                                        <p className="text-[#121517] text-sm font-medium leading-normal">Visual Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="flex justify-center">
                            <div className="flex max-w-[960px] flex-1 flex-col">
                                <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <a href="#">
                                            <div className="text-[#677883]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-[#677883]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-[#677883]" data-icon="GithubLogo" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <p className="text-[#677883] text-base font-normal leading-normal">@2024 Sophie Carter. All rights reserved.</p>
                                </footer>
                            </div>
                        </footer>
                    </div>
                </div>
            </body>
        </>
    );
}
