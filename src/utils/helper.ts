export const redirect = (url: string, target: string = "_blank") => {
    window.open(url, target)
}

export const scrollToView = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (!ref) return;

    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}