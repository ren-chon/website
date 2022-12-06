import { Box, Button, Card, Stack, Text } from "@mantine/core";

export const PostSideBarInfo = () => {
  return (
    <Card radius="md">
      <Stack spacing="lg">
        <Box>
          <Text color="gray.6">نُشر يومَ</Text>
          <Text fw={600}>6/12/2022</Text>
        </Box>
        <Box>
          <Text color="gray.6">التسميات</Text>
          <Text fw={600}>تسمية 1</Text>
          <Text fw={600}>تسمية 2</Text>
        </Box>
        <Box>
          <Text color="gray.6">
            <Text span size="lg" fw={600}>
              {1}
            </Text>{" "}
            من التعليقات
          </Text>
        </Box>
        <Box>
          <Button fullWidth radius="lg">
            نشر تعليق
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
