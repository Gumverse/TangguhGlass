import dynamic from "next/dynamic";

const SwiperComponent = dynamic(() => import("@/components/home-six/services"), {
  ssr: false,
  loading: () => <div>Loading slider...</div>,
});

export default SwiperComponent;