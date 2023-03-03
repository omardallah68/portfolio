{ pkgs }: {
	deps = [
		pkgs.meteor
  pkgs.ruby_3_0
  pkgs.notmuch-bower
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}