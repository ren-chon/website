import { Box, Card, Divider, Flex, Stack, Text, Title } from "@mantine/core";
import { AuthorCard } from "../../src/common/components/AuthorCard";
import Layout from "../../src/common/components/layout";
import { PostSideBarInfo } from "../../src/common/components/SubmittedPostInfo";

export default function Post() {
  return (
    <Layout>
      <Box>
        <Box pt={40}>
          <Stack>
            <Text size={48} fw={600} color="white">
              عنوان تجريبي طويل جدا ممكن ألا يتسع
            </Text>
            <Text size="md">
              عنوان تجريبي طويل جدا ممكن ألا يتسععنوان تجريبي طويل جدا ممكن ألا
              يتسع
            </Text>
          </Stack>
        </Box>
        <Box>
          <Box is="article" mih={575} sx={{ fonstSize: "18px" }}>
            <Flex justify="space-between">
              <Box w={620}>
                <Divider size="md" mt="lg" />
                <Box py="lg">
                  <Text size="lg">
                    Sakura Rabbit, a renowned one-of-a-kind VFX Artist and one
                    of 80 Level regulars, has unveiled one more incredible
                    Unity-powered project. This time, she presented a
                    breathtaking winter-themed real-time snow-covering effect
                    that allows the artist to instantly cover the environment
                    with realistic-looking snow and customize its depth.
                    Moreover, the artist has also shared a comprehensive
                    breakdown of the project and explained how the effect was
                    set up. You can check it out by clicking this link.
                  </Text>
                  <Card my={24}>
                    <Title>Advertisement</Title>
                  </Card>{" "}
                  <Text size="lg">
                    On top of that, the author has also presented a marvelous
                    Unity-based series of projects that combine realistic
                    environments with anime-style characters: You can check out
                    more of Sakura's amazing projects here. Also, don't forget
                    to join our Reddit page and our Telegram channel, follow us
                    on Instagram and Twitter, where we share breakdowns, the
                    latest news, awesome artworks, and more.
                  </Text>
                </Box>
              </Box>{" "}
              <Box w={260} maw={260} mt="lg">
                <Stack>
                  <AuthorCard />
                  <PostSideBarInfo />
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
