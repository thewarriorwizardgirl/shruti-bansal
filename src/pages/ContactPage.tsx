import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'projects.twwg@gmail.com';
  const whatsappNumber = '9599755840';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/91${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto w-full text-center">
        {/* Title */}
        <p className="text-xs uppercase tracking-widest font-semibold text-[#F9A66C] mb-2">
          Shruti's Studio
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif-display font-medium text-[#4A6163] tracking-tight mb-4">
          Contact Me
        </h1>
        <p className="text-base text-[#4A6163]/80 leading-relaxed mb-10 max-w-md mx-auto">
          Have an inquiry for custom art, summer camps, workshops, or collaboration? Reach out directly via WhatsApp or Email.
        </p>

        {/* Contact Card with just WhatsApp and Email */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#4A6163]/10 shadow-sm space-y-6 text-left">
          {/* WhatsApp Direct Action */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E8F8EE] to-[#D5F5E3] border border-[#25D366]/30">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1EBE5D] block">
                  Quickest Response
                </span>
                <span className="text-lg font-serif-display font-semibold text-[#4A6163]">
                  Chat on WhatsApp
                </span>
              </div>
            </div>

            <p className="text-xs text-[#4A6163]/80 mb-4 leading-relaxed">
              Message directly on WhatsApp at <strong className="text-[#4A6163]">+91 95997 55840</strong> for immediate assistance and inquiries.
            </p>

            <a
              href={`https://wa.me/91${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-colors shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Email Direct Action */}
          <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F9A66C]/20">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#F9A66C] text-white flex items-center justify-center shadow-xs shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F9A66C] block">
                  Email Studio
                </span>
                <span className="text-lg font-serif-display font-semibold text-[#4A6163]">
                  Direct Email
                </span>
              </div>
            </div>

            <p className="text-xs text-[#4A6163]/80 mb-4 leading-relaxed">
              Send details, documents, or commission requests directly to our studio inbox.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-3 px-4 rounded-xl bg-white border border-[#4A6163]/15 text-sm font-semibold text-[#4A6163] hover:border-[#F9A66C] transition-colors truncate text-center sm:text-left"
              >
                {email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="py-3 px-4 rounded-xl bg-[#4A6163] text-white text-xs font-medium hover:bg-[#F9A66C] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FFC94B]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
