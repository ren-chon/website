import {
  Avatar,
  Box,
  Card,
  createStyles,
  Flex,
  Stack,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  authorName: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));
export const AuthorCard = () => {
  const { classes } = useStyles();
  return (
    <Card radius="md">
      <Flex gap="sm" align="center">
        <Box>
          <Avatar size="lg" radius="xl" />
        </Box>
        <Stack spacing={0}>
          <Text size="lg" fw={600} className={classes.authorName}>
            corewwwi
          </Text>
          <Text className={classes.authorName} size="sm" color="gray.6">
            الكاتب
          </Text>
        </Stack>
      </Flex>
    </Card>
  );
};
