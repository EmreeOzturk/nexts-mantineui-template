import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const LightDarkButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        
      >
        {dark ? <IconSun size="2.5rem" /> : <IconMoonStars size="1.5rem" />}
      </ActionIcon>
    </div>
  );
};

export default LightDarkButton;
