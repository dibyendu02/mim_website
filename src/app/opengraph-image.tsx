import { ImageResponse } from "next/og";

// Typographic share image generated at build time from approved copy and the
// brand palette. TODO(launch): swap for an approved share image (and the
// official logo) if MiM supplies one — drop a 1200×630 opengraph-image.png
// here and delete this file.

export const alt = "MiM Digital — Structure drives growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#111111",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600 }}>
          MiM&nbsp;<span style={{ color: "#F26A32" }}>Digital</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#F26A32", textTransform: "uppercase" }}>
            Full-service digital marketing
          </div>
          <div style={{ marginTop: 24, fontSize: 104, fontWeight: 600, lineHeight: 1.02, letterSpacing: -4 }}>
            Structure drives growth.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
