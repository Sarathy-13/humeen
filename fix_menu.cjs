const fs = require('fs');

const path = 'src/App.js';
let content = fs.readFileSync(path, 'utf8');

const originalBlock = `                            {isMobileMenuOpen && (
                                <div className="lg:hidden mt-3 sm:mt-4 ml-auto w-full sm:w-[360px] rounded-2xl border border-white/10 bg-[#0b101d]/95 backdrop-blur-xl p-5 sm:p-6 space-y-5 shadow-2xl">
                                    <button
                                        type="button"
                                        onClick={() => openServicesPage()}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Our Services
                                    </button>
                                    <div className="space-y-3 border-t border-white/10 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('works')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Works
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('careers')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Careers
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => openAgencyItemPage('founder-notes')}
                                            className="w-full text-left text-white/80 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Founder Notes
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={openBlogPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Blog
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openCasesPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors"
                                    >
                                        Customer Cases
                                    </button>

                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Region</p>
                                        <RegionDropdown id="region-select-mobile" value={region} onChange={setRegion} buttonClassName="py-2.5 pl-4 pr-10 text-xs" />
                                    </div>
                                </div>
                            )}`;

const newBlock = `                            {isMobileMenuOpen && (
                                <div className="lg:hidden mt-3 sm:mt-4 ml-auto w-full sm:w-[360px] rounded-2xl border border-white/10 bg-[#0b101d]/95 backdrop-blur-xl p-5 sm:p-6 space-y-4 shadow-2xl">
                                    <button
                                        type="button"
                                        onClick={() => openServicesPage()}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Our Services
                                    </button>
                                    <div className="w-full h-px bg-white/10"></div>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('works')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Works
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('careers')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Careers
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openAgencyItemPage('founder-notes')}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Founder Notes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openBlogPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Blog
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openCasesPage}
                                        className="w-full text-left text-white text-sm font-bold uppercase tracking-widest hover:text-[#78a3ff] transition-colors block"
                                    >
                                        Customer Cases
                                    </button>

                                    <div className="border-t border-white/10 pt-4 pb-1">
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Region</p>
                                        <RegionDropdown id="region-select-mobile" value={region} onChange={setRegion} buttonClassName="py-2.5 pl-4 pr-10 text-xs" />
                                    </div>
                                </div>
                            )}`;

if (content.includes(originalBlock)) {
    content = content.replace(originalBlock, newBlock);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Success! Replaced block accurately.");
} else {
    console.log("Failed to find exact match. Attempting fallback regex...");
    // Fallback: simpler regex replacement if exact string fails due to \r\n
    const regex = /\{isMobileMenuOpen && \([\s\S]*?<RegionDropdown id="region-select-mobile"[\s\S]*?<\/div>\s*<\/div>\s*\)\}/;
    if (regex.test(content)) {
        content = content.replace(regex, newBlock);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Success! Replaced block via regex.");
    } else {
        console.log("Failed to find even via regex.");
    }
}
