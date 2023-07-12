install-argo:
	-kubectl create ns argocd
	kubectl apply -k kubernetes\install\ --namespace argocd

init:
	-kubectl create ns dev
	-kubectl create ns tst
	-kubectl create ns prod