document.addEventListener("DOMContentLoaded", () => {
    const { to, set } = gsap;

    document.querySelectorAll('.loading').forEach(loading => {
        loading.count = 0;

        to(loading, {
            keyframes: [
                {
                    '--line-top-x': '-100%',
                    '--line-bottom-x': '-200%',
                    onComplete() {
                        set(loading, {
                            '--line-top-x': '200%',
                            '--line-bottom-x': '100%',
                        });
                    }
                },
                {
                    '--line-top-x': '0%',
                    '--line-bottom-x': '0%'
                }
            ],
            duration: 1,
            repeat: -1
        });
    });
});
