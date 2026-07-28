import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-800 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect minimal information necessary to provide our social
              media management and automation services. When you connect your
              third-party social media accounts (such as Meta/Facebook,
              Instagram, LinkedIn, TikTok, or YouTube), we may collect:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 pl-2">
              <li>
                Basic account details (Name, Email Address, Profile Picture)
              </li>
              <li>Connected Social Pages, Channels, or Business Account IDs</li>
              <li>
                OAuth Access Tokens required to schedule and post content on
                your behalf
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              Platform data obtained via third-party APIs is strictly used to
              empower users to create, schedule, automatically publish content,
              and view engagement analytics from a unified dashboard.
            </p>
            <p className="mt-2 text-slate-400">
              We do not sell, rent, or trade any user or platform data with
              advertisers or third-party networks.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Data Storage & Security
            </h2>
            <p>
              We implement industry-standard technical and organizational
              security measures to protect your API tokens and personal data.
              Access tokens are encrypted at rest and in transit.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Retention & Deletion Instructions
            </h2>
            <p className="mb-3">
              You retain full ownership and control over your connected
              accounts. To revoke application access or request complete
              deletion of your data from our servers:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-400 pl-2">
              <li>
                You can revoke access directly through the connected platform's
                security settings (e.g.,
                <a
                  href="https://www.facebook.com/settings?tab=business_tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline mx-1"
                >
                  Facebook Business Integrations
                </a>
                or LinkedIn/TikTok Account Settings).
              </li>
              <li>
                Or send a formal data deletion request to our support team at
                <a
                  href="mailto:ayman.ezzeldin.dev@gmail.com"
                  className="text-indigo-400 hover:underline mx-1"
                >
                  ayman.ezzeldin.dev@gmail.com
                </a>
                .
              </li>
            </ol>
            <p className="mt-3 text-sm text-slate-400">
              Upon receiving a deletion request, all stored tokens, credentials,
              and associated user records will be permanently purged from our
              database within 30 days.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Contact Us
            </h2>
            <p>
              For any questions or privacy-related inquiries regarding our
              services or third-party integrations, please contact:
              <span className="text-indigo-400 font-mono ml-1">
                ayman.ezzeldin.dev@gmail.com
              </span>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-6 mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Ayman Ezzeldin. All rights reserved.
        </div>
      </div>
    </div>
  );
}
