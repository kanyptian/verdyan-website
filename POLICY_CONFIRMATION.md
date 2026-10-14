# Policy review and changed files

The policies are review drafts with visible confirmation notices. Confirm facts and obtain appropriate legal review before publishing; then replace the draft notice/date with the approved effective date. No business address, governing state, arbitration clause, no-refund rule, or backend security promise was invented.

New: terms-of-service.html and privacy-policy.html. Their branding, top contact bar, navigation, slide-out menu and menu script were copied from contact.html, with a readable responsive policy body.

Footer links added to: about.html, assessment.html, compliance.html, contact.html, general-security.html, governance.html, hipaa.html, home.html, index.html, nist-csf.html, payment-success.html, risk.html, sample-report.html, secure-rooms.html, soc2.html, testing.html. The gateway index.html reserves footer space inside its viewport so links are visible. Insights and articles are unchanged. services/index.html is an unchanged redirect to the linked home page.

Confirm before publication:
- Legal entity name (including any DBA), public business mailing address, applicable jurisdictions and customer markets. The cached prior chat mentions an updated address but does not supply it; no home address was added.
- Whether $199 is USD, taxes, report delivery timing, cancellation/refund terms, customer support process, report rights and any engagement-specific liability terms. Add approved commercial terms before accepting purchases.
- Contact and Secure Rooms backend processing, email/list providers, unsubscribe implementation, authorized recipients, whether communications are used for other marketing, and actual sale/targeted-advertising practices.
- Hosting, AWS storage, reporting tools (including any AI processing), subprocessors, logs, retention periods, backups/deletion, security controls and international processing. Only frontend code is in the ZIP.
- Live analytics, cookies, pixels or hosting-injected tracking; consent and opt-out mechanisms if applicable. None are present in the supplied page scripts.
- Regional privacy-law applicability, legal bases, response procedures, children's handling and any required transfer mechanisms.
- Stripe dashboard settings, collected checkout fields, merchant access, webhook/payment verification, report generation and email delivery.

Existing functionality needing confirmation (preserved): General Security sends answers to AWS before purchase with blank contact fields. NIST stores answers and scores only in localStorage and passes an ID to Stripe; no answer-upload code appears. SOC 2 computes scores in memory and uses a plain Stripe link, with no answer-upload or checkout reference code. The public success page promises email delivery, but backend fulfillment/matching cannot be verified. Confirm these flows actually support report delivery before taking orders. localStorage has no expiry and the shared Stripe URL key can be overwritten by another snapshot in the same browser.

Checks: all original scripts and form markup preserved; all original files retained; every main HTML page has both legal links; article/Insights files and redirect are byte-identical; new policies inherit existing navigation; all added local links resolve. Live form, Stripe, backend, and browser rendering not tested.

Drafting references: https://www.ftc.gov/business-guidance/privacy-security/consumer-privacy (policies must match actual practices); https://stripe.com/privacy (Stripe processing and individual rights). The website source, not these references, establishes the observed form and storage flows.
