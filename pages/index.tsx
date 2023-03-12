import LightDarkButton from "@/components/LightDarkButton";
import { Button, Paper, Text, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  const { colorScheme} = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        background: dark ? "linear-gradient(45deg, #af02ff, #1e1e1e)" : "linear-gradient(45deg, #af02ff, #f9f9f9)",
      }}
    >
      <LightDarkButton />
      <Text
        size="70px"
        weight={500}
        variant="gradient"
        gradient={{
          from: "violet",
          to: "purple",
          deg: 45,
        }}
      >
        Cruxia Labs
      </Text>
      <Image src="/assets/bg.png" alt="hero" width={256} height={256} />
    </div>
  );
}
