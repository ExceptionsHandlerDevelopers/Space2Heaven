// PropertiesPage.tsx
import { Suspense } from "react";
import { LoaderLayout, PropertiesPageContent } from "@/components";

const PropertiesPage = () => {
    return (
        <Suspense fallback={<LoaderLayout loaderType="all" />}>
            <PropertiesPageContent />
        </Suspense>
    );
};

export default PropertiesPage;
