## Prerequisites

To use the resources on this directory to deploy the Q&App React app to a Kubernetes cluster, first, you will need to configure [the NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx) in your cluster. To do so, you can issue the following commands:

```bash
# mandatory files
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# other resources (may vary depending on the service provider)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml
```

To learn more about this, [check out this resource](https://kubernetes.github.io/ingress-nginx/deploy/).

## Deploying

After installing the _NGINX Ingress Controller_ in your cluster, you can issue the following commands to install deploy the React application:

```bash
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f ingress.yaml
``` 

The last file will make your Kubernetes service provider create a _load balancer_ and point to your cluster. To find out the public IP address of your cluster (of this load balancer), you can issue the following command:

```bash
kubectl get svc \
  -n ingress-nginx ingress-nginx \
  -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Then, you can copy the IP printed in your terminal and paste it on a web browser.

> **Note:** Your service provider might need a few minutes to spin a load balancer for you.

## Cleaning Up

In case you want to clean up your cluster, you can issue the following commands:

```bash
kubectl delete -f ingress.yaml

kubectl delete -f service.yaml

kubectl delete -f deployment.yaml

kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml

kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
```

The commands above are very similar to the commands you used to deploy the React app. The difference is that instead of `apply` you are using `delete` and that the order is upside down.
