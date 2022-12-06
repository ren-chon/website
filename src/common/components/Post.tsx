import {
  Box,
  Card,
  createStyles,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";

interface PostCardProps {
  title: string;
  image: string;
  uri: string;
  body: string;
}

const useStyles = createStyles((theme) => ({
  responsiveCard: {
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      flexFlow: "column-reverse",
    },
  },
  responsiveImage: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      height: "100%",
      objectPosition: "center",
      objectFit: "contain",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  },
  titleSection: {
    padding: "32px 52px 16px 26px",
    fontSize: "18px",
  },
}));

export const PostCard = ({ title, image, uri, body }: PostCardProps) => {
  const { classes } = useStyles();
  return (
    <Card p={0} radius="lg">
      <Flex justify="space-between" className={classes.responsiveCard}>
        <Stack p="md" className={classes.titleSection}>
          <Text size={31} color="white" fw={600}>
            {title}
          </Text>
          <Box>
            <Text size="sm">{body.slice(0, 30)}...</Text>
          </Box>
        </Stack>
        <Card.Section>
          <Image src={image} height={360} className={classes.responsiveImage} />
        </Card.Section>
      </Flex>
    </Card>
  );
};
