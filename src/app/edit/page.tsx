import React, { Suspense } from "react";
import EditPost from "@/components/EditPost";
import { Loader } from "@/components/icons/Loader";

const EditPostPage = () => (
  <Suspense fallback={<Loader />}>
    <EditPost />
  </Suspense>
);

export default EditPostPage;
