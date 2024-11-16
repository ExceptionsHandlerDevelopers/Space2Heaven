// PropertiesPage.tsx
import { Suspense } from "react";
import { Loader, PropertiesPageContent } from "@/components";

const PropertiesPage = () => {
    return (
        <Suspense fallback={<section className="min-h-screen w-full flex-center">
            <Loader />
        </section>}>
            <PropertiesPageContent />
        </Suspense>
    );
};

export default PropertiesPage;
