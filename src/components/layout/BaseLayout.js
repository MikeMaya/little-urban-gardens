import React from "react";

import { Box, Grid, Main } from "grommet";
import Header from '../header/Header';

function BaseLayout({ children }) {
  return (
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Box
        gridArea="header"
        direction="row"
      >
        <Header
          title="Little Urban Gardens"
        />
      </Box>
      <Box gridArea="main" justify="center" align="center">
        <Main>
          {children}
        </Main>
      </Box>
    </Grid>
  );
};

export default BaseLayout;