
import Head from 'next/head';
import '../styles/basehero.css';

export default function BaseHero() {
    return (
        <>
            <Head>
                <title>Stitch Design</title>
                <link rel="icon" href="data:image/x-icon;base64," />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
                />
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            </Head>
            <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif" }}>
                <div className="layout-container flex h-full grow flex-col">
                    <header className="flex items-center justify-between border-b border-solid border-b-[#f0f3f5] px-10 py-3">
                        <div className="flex items-center gap-4 text-[#111518]">
                            <div className="size-4">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6_319)">
                                        <path d="M8.578 8.578C5.528 11.628 3.451 15.515 2.609 19.745C1.768 23.976 2.2 28.361 3.851 32.346C5.501 36.331 8.297 39.738 11.883 42.134C15.47 44.531 19.687 45.81 24 45.81C28.314 45.81 32.53 44.531 36.117 42.134C39.703 39.738 42.499 36.331 44.149 32.346C45.8 28.361 46.232 23.976 45.391 19.745C44.549 15.515 42.472 11.628 39.422 8.578L24 24L8.578 8.578Z" fill="currentColor" />
                                    </g>
                                    <defs><clipPath id="clip0_6_319"><rect width="48" height="48" fill="white" /></clipPath></defs>
                                </svg>
                            </div>
                            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Portfolio</h2>
                        </div>
                        <div className="flex flex-1 justify-end gap-8">
                            <div className="flex items-center gap-9">
                                <a className="text-[#111518] text-sm font-medium" href="#">About</a>
                                <a className="text-[#111518] text-sm font-medium" href="#">Projects</a>
                                <a className="text-[#111518] text-sm font-medium" href="#">Contact</a>
                            </div>
                            <button className="flex h-10 px-4 rounded-xl bg-[#3dabf4] text-[#111518] text-sm font-bold">Resume</button>
                        </div>
                    </header>

                    <section className="px-40 flex flex-1 justify-center py-5">
                        <div className="flex flex-col max-w-[960px] flex-1">
                            <div className="p-4">
                                <div
                                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 rounded-xl"
                                    style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbwdg56yZ0OBQf7_0v0MgPsiBhSnMWUsvhmvWHVqhqUZ-xDdTNT86TSstlV4F-Yui5cRydHXH0fYfvKu2hhON7vHhrq8aJkJacVPZ0ni-71l8Hxp-eN4ktj4UblVT9h0-Hqzzcp1aMSqrwOBbJg565rbRqKTLsOPK0NqmvA7LHqICoUJbEDQL-uaoJKSg1zdjrArKThG0W_6BLl4UJhYVwb4t2IrZSHYEp3wYdBe1bJVlj72WaDqol_zo_s_C6C4GHbLeABIIlQb4")' }}
                                >
                                    <div className="flex flex-col gap-2 text-center">
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Hi, I'm Alex, a Product Designer</h1>
                                        <h2 className="text-white text-sm font-normal leading-normal">I design intuitive and user-centered digital experiences. Explore my portfolio to see my work and design philosophy.</h2>
                                    </div>
                                    <button className="flex h-10 px-4 rounded-xl bg-[#3dabf4] text-[#111518] text-sm font-bold mt-4">View Projects</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                <div className="flex flex-col gap-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                        style={{
                                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLCBCU2XTY3aWFa-d9Xix5Fd9hwSoDCIOGdhgGZyn5cDCDOzvMqMONem9YdS0fIbUr6-KDhoJKKdpDQhMQrCKfWVo-k8_4xH9aHYvLvnRCVRWr9fp2ZHC_aF0Z0L-sxSdS6ErTb4nhEkKzadsY1Z4naWnVXLXmQddsAVFmupXNYjhq2_5uTBGOgqcfKJ9Oz3OVBTmfWVciUVyKw5fLDqg8k9U6lHuvebjzvNbH5tw6zlGbz9OVOV5XFlKlv-u1pUFNpk2TtFIzKXc')`
                                        }}
                                    ></div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                        style={{
                                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_DKOEGHm9xbGweStyO6_vZpre4pIueLiUViT-Cg2SYLi3_Pqt2bbqioMWvoTJ3GFxYqz5wpNwm6rSIzppN4kuFTEByWwhE7us87paC5x0dmq_kygctqQ0ynPFS2o-GPKo5YKvaqhQ2oelmk9_UypwHtZ4_6fiXb0kn7DUHZ08Pfqv_NN8yRpdGlDaw0ZoFU6yzRwZ5oAroKcKGDSCbcriwtBZfo5IQNdhZWa-d5tFctMNbHtIfcO9AISMwiBnwemdktt82bbg-Jg')`
                                        }}
                                    ></div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                        style={{
                                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0YgQBrT-1tn8WdnuJPnxlqci8JcuKNRBCJAx5w37ejFNMkYDO4-kmpp_kdRqEanoxaSoMjlct7Z0x3TCMo_DUGmKW13FgpEXfYvAD9Vuc9aEnhhhNfVQoK6-nt7qBkjzmUQTQ6J808ZMp5eeajKjEInuDTys7YjNTBulE0iiLQgelE2gk1b1AAyPLc2ygmQ6fsO1GQVOhSDRVJ4qVpppHjELxBG-N7UulE4LGm79Ld1TqsJaRFSG7M2mfGRyD6Sen96-MGf5iPBs')`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="flex justify-center">
                        <div className="flex max-w-[960px] flex-1 flex-col">
                            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['Twitter', 'Linkedin', 'Github'].map((name, i) => (
                                        <a href="#" key={i}>
                                            <div className="text-[#607a8a]" data-icon={`${name}Logo`} data-size="24px" data-weight="regular">
                                                <span>{name}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-[#607a8a] text-base font-normal leading-normal">@2024 Alex Portfolio. All rights reserved.</p>
                            </footer>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
