import { Box, Stack, Tabs, Title } from "@mantine/core";
import type { NextPage } from "next";
import imedge from "../public/1.avif";
import Layout from "../src/common/components/layout";
import { PostCard } from "../src/common/components/Post";

const Blog: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Title ff="Droid Arabic Naskh" my={40}>
          المقالات
        </Title>
        <Box>
          <Tabs variant="pills" radius="md" defaultValue="recent">
            <Tabs.List>
              <Tabs.Tab value="recent">الجديد</Tabs.Tab>
              <Tabs.Tab value="trend">الرائج</Tabs.Tab>
              <Tabs.Tab value="known">المتداول</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="recent" pt="xs">
              <Stack spacing="xs">
                {[1, 2, 3, 4, 5, 6, 7].map((post) => (
                  <PostCard
                    key={post}
                    image={imedge.src}
                    uri={`/p/str-${post}`}
                    body={`-عنوان تجريبي طويل جدا ممكن ألا يتسع${post}`}
                    title={`-عنوان تجريبي طويل جدا ممكن ألا يتسع${post}`}
                  />
                ))}
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="trend" pt="xs">
              الرائج tab content
            </Tabs.Panel>

            <Tabs.Panel value="known" pt="xs">
              المتداول tab content
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
