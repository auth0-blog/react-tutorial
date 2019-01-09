```bash
kubectl create serviceaccount tiller --namespace=kube-system

kubectl create clusterrolebinding tiller-admin --serviceaccount=kube-system:tiller --clusterrole=cluster-admin

helm init --service-account=tiller

helm repo update

helm install stable/nginx-ingress --name quickstart

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f ingress.yaml

helm install --name cert-manager --namespace cert-manager stable/cert-manager

kubectl apply -f staging-issuer.yaml

kubectl apply -f production-issuer.yaml

kubectl apply -f ingress-tls.yaml

kubectl describe certificate react-tutorial-tls

kubectl apply -f ingress-tls-final.yaml

kubectl delete secret react-tutorial-tls
```
