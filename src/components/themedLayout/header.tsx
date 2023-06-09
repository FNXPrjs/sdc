import React, { useContext } from "react";
import {
  useGetIdentity,
  useActiveAuthProvider,
  pickNotDeprecated,
} from "@refinedev/core";
import { HamburgerMenu } from "./hamburgerMenu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";

import { ColorModeContext } from "./../../contexts/color-mode";

export const ThemedHeaderV2: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  isSticky,
  sticky,
}) => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const prefferedSticky = pickNotDeprecated(sticky, isSticky) ?? true;

  const { mode, setMode } = useContext(ColorModeContext);

  return (
    <AppBar 
      position={prefferedSticky ? "sticky" : "relative"}
      sx={{
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
        }}>
        <HamburgerMenu />
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            <Box marginRight="20px">
                    <IconButton
                      color={mode === "dark" ? ("secondary") : ("primary")}
                      onClick={() => {
                          setMode();
                      }}
                    >
                      {mode === "dark" ? (
                          <LightModeOutlined />
                      ) : (
                          <DarkModeOutlined />
                      )}
                    </IconButton>
                </Box>
          </Stack>
          {/* User avatar and name */}
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
              }}
              variant="subtitle2"
            >
              {user?.name}
            </Typography>
            <Avatar src={user?.avatar} alt={user?.name} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
