// import { IResourceComponentsProps } from "@refinedev/core";
// import { MuiShowInferencer } from "@refinedev/inferencer/mui";

// export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
//   return <MuiShowInferencer />;
// };
import {
  useShow,
  IResourceComponentsProps,
  useTranslate,
} from "@refinedev/core";
import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Stack gap={1}>
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.id")}
              </Typography>
              <NumberField value={record?.id ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.title")}
              </Typography>
              <TextField value={record?.title} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.status")}
              </Typography>
              <TextField value={record?.status} />
          </Stack>
      </Show>
  );
};
