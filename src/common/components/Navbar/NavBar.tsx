import { Box, createStyles, Divider, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  headerWrapper: {
    maxWidth: "920px",
    margin: "0 auto 40px",
    borderBottomRightRadius: "20px",
    backgroundColor: theme.colors.dark[6],
    borderBottomLeftRadius: "20px",
    boxShadow: theme.shadows.xl,
    zIndex: 5,
  },
  NavLinks: {},
}));

export function NavBar() {
  const { classes } = useStyles();
  return (
    <header className={classes.headerWrapper}>
      <Box className={classes.NavLinks} p="xs">
        <Flex align="center">
          <Flex gap="lg" align="center">
            <Link href="/">
              <Text fw={600}>الرئيسية</Text>
            </Link>
            <Link href="/reviews">
              <Text fw={600}>سياسة الخصوصية</Text>
            </Link>

            <Link href="/fluff">
              <Text fw={600}>شروط الخدمة</Text>
            </Link>
          </Flex>
          <Box></Box>
        </Flex>
      </Box>
      <Divider />
      <Box>
        <Flex justify="space-between" align="center" p="xs">
          <Link href="/">
            <Title order={2}>corewwwi's blog</Title>
          </Link>
          <Box>
            <Flex gap="lg" align="center">
              <Link href="/">
                <Text fw={600}>الرئيسية</Text>
              </Link>
              <Link href="/reviews">
                <Text fw={600}>مراجعات</Text>
              </Link>

              <Link href="/fluff">
                <Text fw={600}>حرق للوقت</Text>
              </Link>
              <Link href="/vendors/">
                <Text fw={600}>ألعاب</Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </header>
  );
}
