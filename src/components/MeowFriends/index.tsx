import { Box, Button, Grid, Link, Typography } from "@mui/material";
import Container from "../Container";
import { catsData } from "./data";
import { PurpleText } from "../PurpleText";
import Tags from "../Tags";
import { BorderedTopImage } from "../BorderedTopImage";
import _ from "lodash";
import { links } from "../../config/links";
import { EVENTS, appEmitter } from "../../events";

const MeowFriends = () => {
  return (
    <div>
      <Container
        id={links.miaumigos}
        sx={{
          pt: "67px",
          pb: "107px",
        }}
        tabIndex={0}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: "20px",
          }}
        >
          <PurpleText>miau</PurpleText>migos
        </Typography>
        <Typography
          sx={{
            marginBottom: "55px",
          }}
          variant="h3"
        >
          gatinhos disponíveis para adoção!
        </Typography>
        <Grid container spacing="24">
          {catsData.map((cat) => (
            <Grid item key={cat.name} xs={12} md={8} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <BorderedTopImage
                  src={cat.image}
                  alt={cat.alt}
                  width="360px"
                  height={`${360 + 66}px`}
                  // useMap={`#${_.camelCase(cat.name)}`}
                />
                {/* <map id={_.camelCase(cat.name)} name={_.camelCase(cat.name)}>
                  {cat.points.map((point) => (
                    <area
                      key={point.name}
                      shape="circle"
                      alt="São Paulo"
                      onClick={() => console.log("clicked", point.name)}
                      coords={[
                        point.position.x,
                        point.position.y + 66,
                        point.radius,
                      ].join(",")}
                      href={`/${point.name}`}
                    />
                  ))}
                </map> */}
                <Typography component="h2">
                  <PurpleText>
                    <b>{cat.name}</b>
                  </PurpleText>{" "}
                  <br />
                  {cat.birth}
                </Typography>
                <span>
                  <Link
                    href={cat.link}
                    target="_blank"
                    aria-label={`Abrir mais informações sobre o ${cat.name}`}
                  >
                    Quero saber mais!
                  </Link>
                </span>
                <Box display="flex" gap="16px">
                  <Tags tags={cat.tags} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MeowFriends;
