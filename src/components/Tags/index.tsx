import { Chip } from "@mui/material";
import { TbGenderMale, TbGenderFemale, TbHeartFilled } from "react-icons/tb";

export interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags.map((tag) => {
        switch (tag) {
          case "male":
            return <Chip icon={<TbGenderMale />} key={tag} label="Macho" />;
          case "female":
            return <Chip icon={<TbGenderFemale />} key={tag} label="Fêmea" />;
          case "specialAdoption":
            return (
              <Chip
                icon={<TbHeartFilled />}
                key={tag}
                label="Adoção especial"
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Tags;
