Search.setIndex({"docnames": ["apireference", "clientinstallation", "contractionfunctions", "datatypes", "docgeneration", "functions", "gettingstarted", "helperfunctions", "index", "install", "overview"], "filenames": ["apireference.rst", "clientinstallation.rst", "contractionfunctions.rst", "datatypes.rst", "docgeneration.rst", "functions.rst", "gettingstarted.rst", "helperfunctions.rst", "index.rst", "install.md", "overview.rst"], "titles": ["API Reference", "Setting up the client application", "Contraction Operations", "hipTENSOR Data Types", "DOC Generation", "hipTENSOR Functions", "Getting Started", "Helper Functions", "hipTENSOR: A High-Performance HIP Library For Tensor Primitives", "Installing hipTENSOR package", "Overview"], "terms": {"hiptensor": [0, 1, 2, 4, 6, 7, 10], "data": [0, 2, 7, 8], "type": [0, 2, 7, 8, 9, 10], "hiptensorstatus_t": [0, 2, 7], "hiptensordatatype_t": [0, 7], "hiptensorcomputetype_t": [0, 2], "hiptensoroperator_t": [0, 7], "hiptensoralgo_t": [0, 2], "hiptensorworksizepreference_t": 0, "hiptesnorcontractionoperation_t": 0, "hiptensorhandle_t": [0, 2, 7], "hiptensortensordescriptor_t": [0, 2, 7], "tensor_attr": 0, "hiptensorcontractiondescriptor_t": [0, 2], "hiptensorcontractionfind_t": [0, 2], "hiptensorcontractionmetrics_t": 0, "hiptensorcontractionplan_t": [0, 2], "function": [0, 2, 3, 8], "helper": [0, 2, 5], "contract": [0, 1, 3, 5, 10], "oper": [0, 3, 5, 7, 10], "assum": [1, 7], "ha": [1, 2, 3], "instal": [1, 4, 6, 8], "path": [1, 4, 9], "specifi": [1, 2, 3, 4, 9], "cmake_install_prefix": [1, 4, 9], "while": 1, "build": [1, 6], "packag": [1, 4, 6, 8, 10], "updat": [1, 3], "environ": [1, 4], "variabl": 1, "mention": [1, 4], "below": [1, 4, 9], "export": 1, "hiptensor_root": 1, "ld_library_path": 1, "lib": 1, "If": [1, 2, 7], "we": 1, "store": [1, 3, 7], "follow": [1, 3, 4, 10], "code": [1, 7, 10], "file": [1, 3], "call": [1, 2, 3, 7], "cpp": [1, 2], "can": [1, 2, 3, 7, 10], "compil": [1, 9, 10], "via": 1, "command": [1, 4], "hipcc": [1, 4, 9], "l": 1, "i": [1, 2, 3, 7, 9], "includ": 1, "std": [1, 3], "c": [1, 2, 3, 10], "17": 1, "lhiptensor": 1, "o": [1, 3], "when": [1, 3], "intermedi": [1, 2], "step": [1, 4, 6], "thi": [1, 2, 3, 4, 7, 10], "exampl": [1, 2, 4, 9], "might": 1, "warn": 1, "about": [1, 2], "unus": [1, 2], "due": [1, 9, 10], "being": 1, "complet": [1, 2, 3, 7], "The": [1, 2, 3, 4, 7, 9, 10], "final": [1, 4], "should": [1, 3], "issu": [1, 10], "run": [1, 9], "execut": [1, 2, 3], "return": [1, 2, 3, 7], "result": [1, 2, 3], "without": [1, 2], "ani": 1, "error": [1, 2, 3, 4, 7], "const": [2, 3, 7], "handl": [2, 7, 10], "desc": [2, 3, 7], "desca": 2, "int32_t": 2, "modea": 2, "uint32_t": [2, 3, 7], "alignmentrequirementa": 2, "descb": 2, "modeb": 2, "alignmentrequirementb": 2, "descc": 2, "modec": 2, "alignmentrequirementc": 2, "descd": 2, "mode": [2, 7], "alignmentrequirementd": 2, "typecomput": 2, "describ": [2, 4], "tensor": [2, 3, 7, 10], "problem": 2, "form": 2, "d": [2, 3, 4, 9], "alpha": [2, 3, 10], "mathcal": [2, 3], "A": [2, 3, 10], "b": [2, 3, 10], "beta": [2, 3, 10], "_": 2, "get": [2, 4, 8], "b_": [2, 10], "paramet": [2, 3, 7], "opaqu": [2, 3, 7], "hold": [2, 3, 7], "s": [2, 3, 7, 10], "librari": [2, 3, 7, 10], "context": [2, 3, 7], "out": [2, 7], "struct": [2, 3], "fill": 2, "inform": 2, "encod": [2, 3], "descriptor": [2, 3, 7], "stride": [2, 3, 7], "arrai": [2, 7], "nmodea": 2, "entri": [2, 7], "repres": [2, 3], "correspond": [2, 3, 7], "extent": [2, 7], "w": [2, 9], "r": [2, 4], "t": [2, 9], "argument": [2, 4], "provid": [2, 3, 10], "hiptensorinittensordescriptor": [2, 3, 5], "align": [2, 7], "mai": 2, "requir": [2, 3, 4, 7], "pointer": [2, 7], "byte": [2, 7], "you": 2, "us": [2, 3, 4, 7, 10], "hiptensorgetalignmentrequir": [2, 5], "determin": 2, "best": 2, "valu": [2, 3, 7], "given": [2, 3, 7], "nmodeb": 2, "nmodec": 2, "nmode": 2, "must": [2, 7], "ident": [2, 3], "now": 2, "datatyp": [2, 3, 7, 10], "comput": [2, 3, 7, 10], "hiptensor_status_success": [2, 3, 7], "successfulli": [2, 3, 7], "hiptensor_status_not_initi": [2, 3, 7], "ar": [2, 3, 4], "initi": [2, 3, 4, 7], "find": 2, "algo": 2, "limit": [2, 6], "search": 2, "space": [2, 3], "viabl": 2, "candid": [2, 3], "k": 2, "algorithm": [2, 3, 7, 10], "give": [2, 3], "user": [2, 3], "finer": [2, 3], "control": [2, 3], "over": [2, 3], "subsequ": 2, "allow": [2, 3], "evalu": 2, "current": [2, 3], "backend": [2, 3, 9, 10], "onli": [2, 3, 7, 10], "one": [2, 3], "set": [2, 6, 7, 8, 10], "need": [2, 3, 4, 9, 10], "adapt": [2, 3, 10], "futur": [2, 3, 6], "multipl": [2, 3], "base": [2, 3, 10], "differ": [2, 7, 10], "acceler": [2, 10], "avail": [2, 3, 4, 10], "select": [2, 3], "specif": 2, "hiptensor_algo_default": [2, 3], "supprt": 2, "ck": [2, 3, 9, 10], "hiptensor_status_not_support": [2, 3], "support": [2, 3, 9, 10], "plan": [2, 3], "uint64_t": 2, "workspaces": 2, "appli": [2, 7], "heurist": [2, 3], "reus": 2, "time": [2, 3], "long": 2, "remain": [2, 7], "same": [2, 4], "creat": [2, 4, 7, 9], "activ": [2, 4], "hip": [2, 10], "devic": [2, 3, 7, 10], "e": [2, 3, 7, 9], "well": 2, "all": [2, 3, 4, 10], "runtim": 2, "restrict": 2, "workspac": [2, 3, 9], "size": [2, 3], "been": 2, "found": [2, 10], "void": [2, 3, 7], "hipstream_t": 2, "stream": 2, "routin": 2, "match": 2, "wa": [2, 3], "which": [2, 3, 7, 10], "combin": 2, "typea": 2, "typeb": 2, "typec": 2, "hip_r_32f": 2, "hipensor_compute_32f": 2, "see": 2, "http": [2, 9], "github": [2, 9, 10], "com": [2, 9], "amd": 2, "hpc": 2, "blob": 2, "develop": [2, 6], "test": [2, 10], "01_contract": 2, "test_bilinear_contraction_xdl_fp32": 2, "test_scale_contraction_xdl_fp32": 2, "concret": 2, "scale": [2, 3], "Its": 2, "host": 2, "memori": [2, 3, 7], "gpu": [2, 3], "access": [2, 3], "perform": [2, 3, 10], "hiptensor_status_ck_error": [2, 3], "some": [2, 3], "unknown": [2, 3], "composable_kernel": [2, 3, 9, 10], "occur": [2, 3], "g": 2, "instanc": [2, 3], "input": [2, 3, 10], "enum": 3, "statu": 3, "have": 3, "enumer": 3, "structur": 3, "hiptensor_status_alloc_fail": 3, "resourc": 3, "alloc": [3, 7], "fail": 3, "insid": 3, "hiptensor_status_invalid_valu": [3, 7], "an": [3, 7], "unsupport": [3, 7], "pass": [3, 7], "indic": 3, "hiptensor_status_arch_mismatch": 3, "either": 3, "readi": 3, "target": [3, 4, 9], "architectur": 3, "hiptensor_status_mapping_error": 3, "usual": 3, "caus": 3, "failur": 3, "bind": 3, "textur": 3, "hiptensor_status_execution_fail": 3, "program": 3, "often": 3, "launch": 3, "kernel": [3, 10], "reason": 3, "hiptensor_status_internal_error": 3, "intern": 3, "request": 3, "hiptensor_status_license_error": 3, "licens": 3, "detect": 3, "try": 3, "check": 3, "cubla": 3, "did": 3, "succe": 3, "hiptensor_status_rocm_error": 3, "hiptensor_status_insufficient_workspac": 3, "insuffici": 3, "hiptensor_status_insufficient_driv": 3, "driver": 3, "version": [3, 10], "hiptensor_status_io_error": 3, "relat": 3, "real": 3, "fp16": 3, "bf16": 3, "fp32": [3, 10], "fp64": 10, "xdlop": [], "swdev": 10, "335738": 10, "hiptensor_r_16f": 3, "half": 3, "hiptensor_r_16bf": 3, "nv_bfloat16": 3, "hiptensor_r_32f": 3, "float": 3, "hiptensor_r_64f": 3, "doubl": 3, "hiptensor_compute_16f": 3, "point": 3, "5": [3, 10], "bit": 3, "expon": 3, "10": 3, "mantissa": 3, "aka": 3, "hiptensor_compute_16bf": 3, "8": 3, "7": 3, "bfloat": 3, "hiptensor_compute_tf32": 3, "32": 3, "hiptensor_compute_32f": 3, "23": 3, "hiptensor_compute_64f": 3, "11": 3, "52": 3, "hiptensor_compute_8u": 3, "unsign": 3, "integ": 3, "hiptensor_compute_8i": 3, "sign": 3, "hiptensor_compute_32u": 3, "hiptensor_compute_32i": 3, "captur": 3, "hiptensor_op_ident": 3, "element": [3, 7], "chang": 3, "hiptensor_op_unknown": 3, "reserv": 3, "hiptensorcontract": [3, 5], "0": [3, 7], "certain": 3, "sub": 3, "gett": 3, "hiptensor_algo_default_pati": 3, "more": 3, "accur": 3, "also": [3, 10], "consum": 3, "model": 3, "hiptensor_algo_gett": 3, "choos": 3, "hiptensor_algo_tgett": 3, "transpos": 3, "hiptensor_algo_ttgt": 3, "gemm": 3, "addit": 3, "let": 3, "suggest": 3, "amount": 3, "hiptensorcontractiongetworkspac": [3, 10], "hiptensor_workspace_min": 3, "At": 3, "least": [3, 7], "hiptensor_workspace_recommend": 3, "most": 3, "suitabl": 3, "hiptensor_workspace_max": 3, "decid": 3, "put": 3, "hiptensor_contraction_scal": 3, "hiptensor_contraction_bilinear": 3, "length": [3, 7], "construct": 3, "public": 3, "default": 3, "constructor": 3, "hiptensordescriptor_t": 3, "hiptensorcalculatestrid": 3, "templat": [3, 10], "typenam": 3, "x": 3, "inlin": 3, "vector": 3, "len": [3, 7], "y": 3, "size_t": 3, "hiptensorgetnumofdimens": 3, "number": [3, 7], "dimens": [3, 7], "hiptensorgetelements": 3, "total": 3, "hiptensorgetelementspac": 3, "hiptensorgetlength": 3, "hiptensorgetstrid": 3, "member": 3, "ht_type": 3, "friend": 3, "ostream": 3, "os": 3, "print": 3, "tensor_s": 3, "hiptensorinitcontractiondescriptor": [3, 5], "hiptensorcontractionattrupd": 3, "int": 3, "tensor_desc_num": 3, "param": 3, "ht_contract_attr_desc": 3, "ht_contract_op": 3, "bilinear": 3, "perf": 3, "flop": 3, "transfer": 3, "speed": 3, "name": 3, "avg_tim": 3, "exectu": 3, "tflop": 3, "transfer_spe": 3, "string": 3, "ht_instanc": 3, "hiptensorinitcontractionplan": [3, 5], "hiptensorprintcontractionmetr": 3, "ht_plan_desc": 3, "section": 4, "doxygen": 4, "sphinx": 4, "breath": 4, "extens": [4, 9], "requist": 4, "docker": 4, "befor": 4, "modul": 4, "sudo": [4, 9], "apt": 4, "latex": 4, "depend": 4, "doucment": 4, "texliv": 4, "extra": 4, "latexmk": 4, "It": 4, "recommend": 4, "virtual": 4, "other": [3, 4], "python": 4, "3": 4, "9": 4, "python3": 4, "venv": 4, "In": [4, 7], "few": [4, 10], "linux": 4, "encounterd": 4, "resolv": 4, "those": 4, "websit": 4, "txt": 4, "folder": 4, "m": 4, "venv_path": 4, "sourc": [4, 10], "bin": [4, 9], "pip": 4, "projcet_source_dir": 4, "doucmen": 4, "flag": [4, 9], "build_doc": 4, "ON": [4, 9], "cmake": 4, "id": [4, 9], "gfx908": [4, 9], "gfx90a": [4, 9], "build_dev": [4, 9], "off": [4, 9], "cmake_build_typ": [4, 9], "releas": [3, 4, 9], "cmake_cxx_flag": [4, 9], "offload": [4, 9], "arch": [4, 9], "o3": [4, 9], "cmake_cxx_compil": [4, 9], "opt": [4, 9], "rocm": [4, 10], "cmake_prefix_path": [4, 9], "path_to_ht_install_directori": [4, 9], "make": [4, 9, 10], "after": [4, 7], "intiat": 4, "earlier": 4, "documen": 4, "cmake_binary_dir": 4, "hiptensorinit": 5, "hiptensorinitcontractionfind": 5, "overview": [6, 8], "introduct": 6, "pre": [6, 7], "requisit": 6, "doc": [6, 8], "gener": [6, 7, 8, 10], "document": 6, "html": 6, "pdf": 6, "up": [6, 8], "client": [6, 8], "applic": [6, 7, 8], "associ": 7, "particular": 7, "unchang": 7, "order": 7, "new": 7, "hipinit": 7, "anoth": 7, "block": 7, "reentrant": 7, "thread": 7, "safe": 7, "success": 7, "otherwis": 7, "nummod": 7, "int64_t": 7, "unaryop": 7, "non": 7, "address": 7, "where": 7, "object": 7, "each": 7, "larger": 7, "than": 7, "zero": 7, "denot": 7, "displac": 7, "between": 7, "two": 7, "consecut": 7, "ith": 7, "null": 7, "pack": 7, "column": 7, "major": 7, "layout": [7, 10], "increas": 7, "monoton": 7, "from": 7, "left": 7, "right": 7, "unari": 7, "lazi": 7, "fashion": 7, "its": 7, "operand": 7, "onc": 7, "origin": 7, "contain": 7, "sizeof": 7, "ptr": 7, "alignmentrequir": 7, "minim": 7, "raw": 7, "respect": 7, "largest": 7, "fulfil": 7, "start": 8, "api": [8, 9, 10], "refer": 8, "privileg": 9, "group": 9, "add": [3, 9], "root": 9, "v": 9, "path_to_local_workspac": 9, "tensorflow": 9, "rocm5": 9, "1": [9, 10], "tf2": 9, "6": 9, "dev": 9, "bash": 9, "radeonopencomput": 9, "move": 9, "directori": 9, "mkdir": 9, "cd": 9, "regular": 9, "aarch": 9, "prefix": 9, "To": 9, "debug": 9, "debug_mod": 9, "note": 9, "parallel": 9, "isn": 9, "unavail": 9, "advanc": 10, "micro": 10, "inc": 10, "binari": 10, "repo": 10, "implement": 10, "first": 10, "our": 10, "singl": 10, "precis": 10, "arithmet": 10, "d_": 10, "m0": 10, "m1": 10, "n0": 10, "n1": 10, "a_": 10, "k0": 10, "k1": 10, "c_": 10, "high": 10, "primit": 10, "compos": 10, "abil": 10, "assembl": 10, "mathemat": 10, "9110": 10, "suppport": 10, "assumpt": 10, "m2": 10, "k2": 10, "n2": 10, "output": 10, "arbitrari": 10, "hiptensorcontractionfind": 10, "per": [3, 10], "pend": 10, "modularis": 10, "part": 10, "core": 10, "logic": 10, "todo": 3, "ad": 3, "cutensor": 3, "Not": 3}, "objects": {"": [[3, 0, 1, "_CPPv415hiptensorAlgo_t", "hiptensorAlgo_t"], [3, 1, 1, "_CPPv4N15hiptensorAlgo_t22HIPTENSOR_ALGO_DEFAULTE", "hiptensorAlgo_t::HIPTENSOR_ALGO_DEFAULT"], [3, 1, 1, "_CPPv4N15hiptensorAlgo_t30HIPTENSOR_ALGO_DEFAULT_PATIENTE", "hiptensorAlgo_t::HIPTENSOR_ALGO_DEFAULT_PATIENT"], [3, 1, 1, "_CPPv4N15hiptensorAlgo_t19HIPTENSOR_ALGO_GETTE", "hiptensorAlgo_t::HIPTENSOR_ALGO_GETT"], [3, 1, 1, "_CPPv4N15hiptensorAlgo_t20HIPTENSOR_ALGO_TGETTE", "hiptensorAlgo_t::HIPTENSOR_ALGO_TGETT"], [3, 1, 1, "_CPPv4N15hiptensorAlgo_t19HIPTENSOR_ALGO_TTGTE", "hiptensorAlgo_t::HIPTENSOR_ALGO_TTGT"], [3, 0, 1, "_CPPv422hiptensorComputeType_t", "hiptensorComputeType_t"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t22HIPTENSOR_COMPUTE_16BFE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_16BF"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t21HIPTENSOR_COMPUTE_16FE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_16F"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t21HIPTENSOR_COMPUTE_32FE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_32F"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t21HIPTENSOR_COMPUTE_32IE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_32I"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t21HIPTENSOR_COMPUTE_32UE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_32U"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t21HIPTENSOR_COMPUTE_64FE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_64F"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t20HIPTENSOR_COMPUTE_8IE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_8I"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t20HIPTENSOR_COMPUTE_8UE", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_8U"], [3, 1, 1, "_CPPv4N22hiptensorComputeType_t22HIPTENSOR_COMPUTE_TF32E", "hiptensorComputeType_t::HIPTENSOR_COMPUTE_TF32"], [2, 2, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::A"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::B"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::C"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::D"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::alpha"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::beta"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::handle"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::plan"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::stream"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::workspace"], [2, 3, 1, "_CPPv420hiptensorContractionPK17hiptensorHandle_tPK26hiptensorContractionPlan_tPKvPKvPKvPKvPKvPvPv8uint64_t11hipStream_t", "hiptensorContraction::workspaceSize"], [3, 4, 1, "_CPPv432hiptensorContractionDescriptor_t", "hiptensorContractionDescriptor_t"], [3, 2, 1, "_CPPv4N32hiptensorContractionDescriptor_t30hiptensorContractionAttrUpdateEA_PK27hiptensorTensorDescriptor_tA_K8uint32_tKi", "hiptensorContractionDescriptor_t::hiptensorContractionAttrUpdate"], [3, 3, 1, "_CPPv4N32hiptensorContractionDescriptor_t30hiptensorContractionAttrUpdateEA_PK27hiptensorTensorDescriptor_tA_K8uint32_tKi", "hiptensorContractionDescriptor_t::hiptensorContractionAttrUpdate::desc"], [3, 3, 1, "_CPPv4N32hiptensorContractionDescriptor_t30hiptensorContractionAttrUpdateEA_PK27hiptensorTensorDescriptor_tA_K8uint32_tKi", "hiptensorContractionDescriptor_t::hiptensorContractionAttrUpdate::tensor_desc_num"], [3, 3, 1, "_CPPv4N32hiptensorContractionDescriptor_t30hiptensorContractionAttrUpdateEA_PK27hiptensorTensorDescriptor_tA_K8uint32_tKi", "hiptensorContractionDescriptor_t::hiptensorContractionAttrUpdate::tensor_size"], [3, 5, 1, "_CPPv4N32hiptensorContractionDescriptor_t21ht_contract_attr_descE", "hiptensorContractionDescriptor_t::ht_contract_attr_desc"], [3, 5, 1, "_CPPv4N32hiptensorContractionDescriptor_t14ht_contract_opE", "hiptensorContractionDescriptor_t::ht_contract_op"], [3, 4, 1, "_CPPv426hiptensorContractionFind_t", "hiptensorContractionFind_t"], [3, 4, 1, "_CPPv429hiptensorContractionMetrics_t", "hiptensorContractionMetrics_t"], [3, 5, 1, "_CPPv4N29hiptensorContractionMetrics_t8avg_timeE", "hiptensorContractionMetrics_t::avg_time"], [3, 5, 1, "_CPPv4N29hiptensorContractionMetrics_t11ht_instanceE", "hiptensorContractionMetrics_t::ht_instance"], [3, 5, 1, "_CPPv4N29hiptensorContractionMetrics_t6tflopsE", "hiptensorContractionMetrics_t::tflops"], [3, 5, 1, "_CPPv4N29hiptensorContractionMetrics_t14transfer_speedE", "hiptensorContractionMetrics_t::transfer_speed"], [3, 4, 1, "_CPPv426hiptensorContractionPlan_t", "hiptensorContractionPlan_t"], [3, 2, 1, "_CPPv4N26hiptensorContractionPlan_t32hiptensorPrintContractionMetricsEv", "hiptensorContractionPlan_t::hiptensorPrintContractionMetrics"], [3, 5, 1, "_CPPv4N26hiptensorContractionPlan_t12ht_plan_descE", "hiptensorContractionPlan_t::ht_plan_desc"], [3, 0, 1, "_CPPv419hiptensorDataType_t", "hiptensorDataType_t"], [3, 1, 1, "_CPPv4N19hiptensorDataType_t16HIPTENSOR_R_16BFE", "hiptensorDataType_t::HIPTENSOR_R_16BF"], [3, 1, 1, "_CPPv4N19hiptensorDataType_t15HIPTENSOR_R_16FE", "hiptensorDataType_t::HIPTENSOR_R_16F"], [3, 1, 1, "_CPPv4N19hiptensorDataType_t15HIPTENSOR_R_32FE", "hiptensorDataType_t::HIPTENSOR_R_32F"], [3, 1, 1, "_CPPv4N19hiptensorDataType_t15HIPTENSOR_R_64FE", "hiptensorDataType_t::HIPTENSOR_R_64F"], [7, 2, 1, "_CPPv432hiptensorGetAlignmentRequirementPK17hiptensorHandle_tPKvPK27hiptensorTensorDescriptor_tP8uint32_t", "hiptensorGetAlignmentRequirement"], [7, 3, 1, "_CPPv432hiptensorGetAlignmentRequirementPK17hiptensorHandle_tPKvPK27hiptensorTensorDescriptor_tP8uint32_t", "hiptensorGetAlignmentRequirement::alignmentRequirement"], [7, 3, 1, "_CPPv432hiptensorGetAlignmentRequirementPK17hiptensorHandle_tPKvPK27hiptensorTensorDescriptor_tP8uint32_t", "hiptensorGetAlignmentRequirement::desc"], [7, 3, 1, "_CPPv432hiptensorGetAlignmentRequirementPK17hiptensorHandle_tPKvPK27hiptensorTensorDescriptor_tP8uint32_t", "hiptensorGetAlignmentRequirement::handle"], [7, 3, 1, "_CPPv432hiptensorGetAlignmentRequirementPK17hiptensorHandle_tPKvPK27hiptensorTensorDescriptor_tP8uint32_t", "hiptensorGetAlignmentRequirement::ptr"], [3, 4, 1, "_CPPv417hiptensorHandle_t", "hiptensorHandle_t"], [7, 2, 1, "_CPPv413hiptensorInitP17hiptensorHandle_t", "hiptensorInit"], [7, 3, 1, "_CPPv413hiptensorInitP17hiptensorHandle_t", "hiptensorInit::handle"], [2, 2, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::alignmentRequirementA"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::alignmentRequirementB"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::alignmentRequirementC"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::alignmentRequirementD"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::desc"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::descA"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::descB"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::descC"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::descD"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::handle"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::modeA"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::modeB"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::modeC"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::modeD"], [2, 3, 1, "_CPPv434hiptensorInitContractionDescriptorPK17hiptensorHandle_tP32hiptensorContractionDescriptor_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_tPK27hiptensorTensorDescriptor_tA_K7int32_tK8uint32_t22hiptensorComputeType_t", "hiptensorInitContractionDescriptor::typeCompute"], [2, 2, 1, "_CPPv428hiptensorInitContractionFindPK17hiptensorHandle_tP26hiptensorContractionFind_tK15hiptensorAlgo_t", "hiptensorInitContractionFind"], [2, 3, 1, "_CPPv428hiptensorInitContractionFindPK17hiptensorHandle_tP26hiptensorContractionFind_tK15hiptensorAlgo_t", "hiptensorInitContractionFind::algo"], [2, 3, 1, "_CPPv428hiptensorInitContractionFindPK17hiptensorHandle_tP26hiptensorContractionFind_tK15hiptensorAlgo_t", "hiptensorInitContractionFind::find"], [2, 3, 1, "_CPPv428hiptensorInitContractionFindPK17hiptensorHandle_tP26hiptensorContractionFind_tK15hiptensorAlgo_t", "hiptensorInitContractionFind::handle"], [2, 2, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan"], [2, 3, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan::desc"], [2, 3, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan::find"], [2, 3, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan::handle"], [2, 3, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan::plan"], [2, 3, 1, "_CPPv428hiptensorInitContractionPlanPK17hiptensorHandle_tP26hiptensorContractionPlan_tPK32hiptensorContractionDescriptor_tPK26hiptensorContractionFind_tK8uint64_t", "hiptensorInitContractionPlan::workspaceSize"], [7, 2, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::dataType"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::desc"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::handle"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::lens"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::numModes"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::strides"], [7, 3, 1, "_CPPv429hiptensorInitTensorDescriptorPK17hiptensorHandle_tP27hiptensorTensorDescriptor_tK8uint32_tA_K7int64_tA_K7int64_t19hiptensorDataType_t19hiptensorOperator_t", "hiptensorInitTensorDescriptor::unaryOp"], [3, 0, 1, "_CPPv419hiptensorOperator_t", "hiptensorOperator_t"], [3, 1, 1, "_CPPv4N19hiptensorOperator_t21HIPTENSOR_OP_IDENTITYE", "hiptensorOperator_t::HIPTENSOR_OP_IDENTITY"], [3, 1, 1, "_CPPv4N19hiptensorOperator_t20HIPTENSOR_OP_UNKNOWNE", "hiptensorOperator_t::HIPTENSOR_OP_UNKNOWN"], [3, 0, 1, "_CPPv417hiptensorStatus_t", "hiptensorStatus_t"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t29HIPTENSOR_STATUS_ALLOC_FAILEDE", "hiptensorStatus_t::HIPTENSOR_STATUS_ALLOC_FAILED"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t30HIPTENSOR_STATUS_ARCH_MISMATCHE", "hiptensorStatus_t::HIPTENSOR_STATUS_ARCH_MISMATCH"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t25HIPTENSOR_STATUS_CK_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_CK_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t33HIPTENSOR_STATUS_EXECUTION_FAILEDE", "hiptensorStatus_t::HIPTENSOR_STATUS_EXECUTION_FAILED"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t36HIPTENSOR_STATUS_INSUFFICIENT_DRIVERE", "hiptensorStatus_t::HIPTENSOR_STATUS_INSUFFICIENT_DRIVER"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t39HIPTENSOR_STATUS_INSUFFICIENT_WORKSPACEE", "hiptensorStatus_t::HIPTENSOR_STATUS_INSUFFICIENT_WORKSPACE"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t31HIPTENSOR_STATUS_INTERNAL_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_INTERNAL_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t30HIPTENSOR_STATUS_INVALID_VALUEE", "hiptensorStatus_t::HIPTENSOR_STATUS_INVALID_VALUE"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t25HIPTENSOR_STATUS_IO_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_IO_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t30HIPTENSOR_STATUS_LICENSE_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_LICENSE_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t30HIPTENSOR_STATUS_MAPPING_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_MAPPING_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t32HIPTENSOR_STATUS_NOT_INITIALIZEDE", "hiptensorStatus_t::HIPTENSOR_STATUS_NOT_INITIALIZED"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t30HIPTENSOR_STATUS_NOT_SUPPORTEDE", "hiptensorStatus_t::HIPTENSOR_STATUS_NOT_SUPPORTED"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t27HIPTENSOR_STATUS_ROCM_ERRORE", "hiptensorStatus_t::HIPTENSOR_STATUS_ROCM_ERROR"], [3, 1, 1, "_CPPv4N17hiptensorStatus_t24HIPTENSOR_STATUS_SUCCESSE", "hiptensorStatus_t::HIPTENSOR_STATUS_SUCCESS"], [3, 4, 1, "_CPPv427hiptensorTensorDescriptor_t", "hiptensorTensorDescriptor_t"], [3, 2, 1, "_CPPv4N27hiptensorTensorDescriptor_t25hiptensorCalculateStridesEv", "hiptensorTensorDescriptor_t::hiptensorCalculateStrides"], [3, 2, 1, "_CPPv4NK27hiptensorTensorDescriptor_t23hiptensorGetElementSizeEv", "hiptensorTensorDescriptor_t::hiptensorGetElementSize"], [3, 2, 1, "_CPPv4NK27hiptensorTensorDescriptor_t24hiptensorGetElementSpaceEv", "hiptensorTensorDescriptor_t::hiptensorGetElementSpace"], [3, 2, 1, "_CPPv4NK27hiptensorTensorDescriptor_t19hiptensorGetLengthsEv", "hiptensorTensorDescriptor_t::hiptensorGetLengths"], [3, 2, 1, "_CPPv4NK27hiptensorTensorDescriptor_t26hiptensorGetNumOfDimensionEv", "hiptensorTensorDescriptor_t::hiptensorGetNumOfDimension"], [3, 2, 1, "_CPPv4NK27hiptensorTensorDescriptor_t19hiptensorGetStridesEv", "hiptensorTensorDescriptor_t::hiptensorGetStrides"], [3, 2, 1, "_CPPv4I00EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEERKNSt6vectorI1YEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t"], [3, 2, 1, "_CPPv4I0EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t"], [3, 2, 1, "_CPPv4N27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tEv", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t"], [3, 6, 1, "_CPPv4I00EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEERKNSt6vectorI1YEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::X"], [3, 6, 1, "_CPPv4I0EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::X"], [3, 6, 1, "_CPPv4I00EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEERKNSt6vectorI1YEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::Y"], [3, 3, 1, "_CPPv4I00EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEERKNSt6vectorI1YEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::lens"], [3, 3, 1, "_CPPv4I0EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::lens"], [3, 3, 1, "_CPPv4I00EN27hiptensorTensorDescriptor_t27hiptensorTensorDescriptor_tERKNSt6vectorI1XEERKNSt6vectorI1YEE", "hiptensorTensorDescriptor_t::hiptensorTensorDescriptor_t::strides"], [3, 5, 1, "_CPPv4N27hiptensorTensorDescriptor_t7ht_typeE", "hiptensorTensorDescriptor_t::ht_type"], [3, 2, 1, "_CPPv4N27hiptensorTensorDescriptor_tlsERNSt7ostreamERK27hiptensorTensorDescriptor_t", "hiptensorTensorDescriptor_t::operator&lt;&lt;"], [3, 3, 1, "_CPPv4N27hiptensorTensorDescriptor_tlsERNSt7ostreamERK27hiptensorTensorDescriptor_t", "hiptensorTensorDescriptor_t::operator&lt;&lt;::desc"], [3, 3, 1, "_CPPv4N27hiptensorTensorDescriptor_tlsERNSt7ostreamERK27hiptensorTensorDescriptor_t", "hiptensorTensorDescriptor_t::operator&lt;&lt;::os"], [3, 0, 1, "_CPPv429hiptensorWorksizePreference_t", "hiptensorWorksizePreference_t"], [3, 1, 1, "_CPPv4N29hiptensorWorksizePreference_t23HIPTENSOR_WORKSPACE_MAXE", "hiptensorWorksizePreference_t::HIPTENSOR_WORKSPACE_MAX"], [3, 1, 1, "_CPPv4N29hiptensorWorksizePreference_t23HIPTENSOR_WORKSPACE_MINE", "hiptensorWorksizePreference_t::HIPTENSOR_WORKSPACE_MIN"], [3, 1, 1, "_CPPv4N29hiptensorWorksizePreference_t31HIPTENSOR_WORKSPACE_RECOMMENDEDE", "hiptensorWorksizePreference_t::HIPTENSOR_WORKSPACE_RECOMMENDED"], [3, 0, 1, "_CPPv431hiptesnorContractionOperation_t", "hiptesnorContractionOperation_t"], [3, 1, 1, "_CPPv4N31hiptesnorContractionOperation_t30HIPTENSOR_CONTRACTION_BILINEARE", "hiptesnorContractionOperation_t::HIPTENSOR_CONTRACTION_BILINEAR"], [3, 1, 1, "_CPPv4N31hiptesnorContractionOperation_t27HIPTENSOR_CONTRACTION_SCALEE", "hiptesnorContractionOperation_t::HIPTENSOR_CONTRACTION_SCALE"], [3, 4, 1, "_CPPv411tensor_attr", "tensor_attr"], [3, 5, 1, "_CPPv4N11tensor_attr4lensE", "tensor_attr::lens"], [3, 5, 1, "_CPPv4N11tensor_attr7stridesE", "tensor_attr::strides"], [3, 5, 1, "_CPPv4N11tensor_attr11tensor_sizeE", "tensor_attr::tensor_size"]]}, "objtypes": {"0": "cpp:enum", "1": "cpp:enumerator", "2": "cpp:function", "3": "cpp:functionParam", "4": "cpp:class", "5": "cpp:member", "6": "cpp:templateParam"}, "objnames": {"0": ["cpp", "enum", "C++ enum"], "1": ["cpp", "enumerator", "C++ enumerator"], "2": ["cpp", "function", "C++ function"], "3": ["cpp", "functionParam", "C++ function parameter"], "4": ["cpp", "class", "C++ class"], "5": ["cpp", "member", "C++ member"], "6": ["cpp", "templateParam", "C++ template parameter"]}, "titleterms": {"api": 0, "refer": 0, "content": [0, 5, 6, 8], "set": 1, "up": 1, "client": 1, "applic": 1, "contract": 2, "oper": 2, "hiptensorinitcontractiondescriptor": 2, "hiptensorinitcontractionfind": 2, "hiptensorinitcontractionplan": 2, "hiptensorcontract": 2, "hiptensor": [3, 5, 8, 9], "data": 3, "type": 3, "hiptensorstatus_t": 3, "hiptensordatatype_t": 3, "hiptensorcomputetype_t": 3, "hiptensoroperator_t": 3, "hiptensoralgo_t": 3, "hiptensorworksizepreference_t": 3, "hiptesnorcontractionoperation_t": 3, "hiptensorhandle_t": 3, "hiptensortensordescriptor_t": 3, "tensor_attr": 3, "hiptensorcontractiondescriptor_t": 3, "hiptensorcontractionfind_t": 3, "hiptensorcontractionmetrics_t": 3, "hiptensorcontractionplan_t": 3, "doc": 4, "gener": 4, "pre": [4, 9], "requisit": [4, 9], "build": [4, 9], "document": 4, "html": 4, "pdf": 4, "function": [5, 7], "get": 6, "start": 6, "helper": 7, "hiptensorinit": 7, "remark": 7, "hiptensorinittensordescriptor": 7, "hiptensorgetalignmentrequir": 7, "A": 8, "high": 8, "perform": 8, "hip": 8, "librari": 8, "For": 8, "tensor": 8, "primit": 8, "instal": 9, "packag": 9, "docker": 9, "cmd": 9, "new": 9, "rocm": 9, "cmake": 9, "version": 9, "step": 9, "mode": 9, "execut": 9, "overview": 10, "introduct": 10, "limit": 10, "futur": 10, "develop": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})