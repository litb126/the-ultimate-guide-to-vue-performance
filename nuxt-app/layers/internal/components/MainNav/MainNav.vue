<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="navbar bg-base-300 w-full relative z-10">
                <div>
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

            </div>
            <div class="container mx-auto p-5">
                <slot></slot>
            </div>

        </div>
        <div class="drawer-side z-20">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <MainNavLinksList />
        </div>
    </div>
</template>
