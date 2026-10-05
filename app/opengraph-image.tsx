import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide fallback social-share card. Used by any page that doesn't
// define its own opengraph-image — currently every page, since only the
// blog article template sets custom OG images per post. Pure brand
// tokens + the already-approved site title, no invented copy or imagery.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FBF7F0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "4px solid #0E6E68",
            }}
          />
          <span style={{ fontSize: 36, fontWeight: 700, color: "#171D1B" }}>
            Noordstar
          </span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#171D1B",
            maxWidth: 950,
          }}
        >
          One business problem. One practical AI fix.
        </div>
        <div style={{ marginTop: 32, fontSize: 32, fontWeight: 600, color: "#0E6E68" }}>
          €49 excl. VAT · Reviewed by a named specialist
        </div>
      </div>
    ),
    { ...size }
  );
}
