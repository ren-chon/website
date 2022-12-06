import { Box, createStyles, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footerWrapper: {
    maxWidth: "920px",
    margin: "0 auto 40px",
    borderTopRightRadius: theme.radius.lg,
    backgroundColor: theme.colors.dark[6],
    borderTopLeftRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    zIndex: 5,
    // verticalAlign: "bottom",
  },
  footer: {},
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <Box className={classes.footerWrapper}>
      <Flex justify="space-between" align="space">
        <Title>corewwwi{"<ren-chon@github>"}</Title>
        <Box>
          <ul>
            <li>
              <p>Twitter</p>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.twitter.com/prod_ocean"
              >
                @prod_ocean
              </a>
            </li>
            <li>
              <p>Github</p>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.github.com/ren-chon"
              >
                @ren-chon
              </a>
            </li>
            <li>
              <Link href="/projects">
                <p>My Projects</p>
              </Link>
            </li>
          </ul>
        </Box>
      </Flex>
      <Box>
        <Box>
          <p>© 2022. 80 level. All rights reserved</p>
          <ul>
            <li>
              <Link href="/contact-us/">
                <Text>About &amp; Contact us</Text>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/">
                <Text>Privacy Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="/republishing-policy/">
                <Text>Republishing policy</Text>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use/">
                <Text>Terms of use</Text>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
