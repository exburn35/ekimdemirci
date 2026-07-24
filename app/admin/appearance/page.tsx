"use client";

import { Suspense } from "react";
import AppearanceSettings from "@/components/admin/appearance/AppearanceSettings";

function AppearancePageContent() {
  return <AppearanceSettings />;
}

export default function AppearancePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppearancePageContent />
    </Suspense>
  );
}

