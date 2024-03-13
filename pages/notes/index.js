import { useQueries } from "@/hooks/useQueries";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Notes() {
  const router = useRouter();
  const { data: listNotes } = useQueries({ prefixUrl: "/api/notes" });

  const HandleDelete = async (id) => {
    try {
      const response = await fetch(`/api/notes/delete/${id}`);
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
    } catch (error) {}
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding="5">
          <Flex justifyContent="end">
            <Button
              colorScheme="blue"
              onClick={() => router.push("/notes/add")}
            >
              Add Notes
            </Button>
          </Flex>
          <Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {listNotes?.data?.map((item) => (
                <GridItem key={item?.id}>
                  <Card>
                    <CardHeader>
                      <Heading>{item?.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{item?.description}</Text>
                    </CardBody>
                    <CardFooter justify="space-between" flexWrap="wrap">
                      <Button
                        onClick={() => router.push(`/notes/edit/${item?.id}`)}
                        flex="1"
                        variant="ghost"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => HandleDelete(item?.id)}
                        flex="1"
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </LayoutComponent>
    </>
  );
}
