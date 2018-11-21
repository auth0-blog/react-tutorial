# React Tutorial: Building and Securing Your First App

Application repo accompanying this Auth0 article. In this article, you will learn how to build modern applications with React and Node.js.

[React Tutorial: Building and Securing Your First App](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/)

## Running This Sample

To facilitate running this sample, I've left my own Auth0 configuration values in this repo. As such, you can simply run the following commands to run this sample:

```bash
# after cloning, move into this dir
cd react-tutorial

# install backend deps
cd backend
npm i

# run backend on the background
node src &

# install frontend deps
cd ../frontend
npm i

# run the frontend app
npm start
```

### Running on Minikube

References:

- https://medium.com/@awkwardferny/getting-started-with-kubernetes-ingress-nginx-on-minikube-d75e58f52b6c
- https://medium.freecodecamp.org/learn-kubernetes-in-under-3-hours-a-detailed-guide-to-orchestrating-containers-114ff420e882

Create all the resources (deployment, services, and ingress):

```bash
kubectl apply -f resources-manifests/deployment.yaml
kubectl apply -f resources-manifests/backend-service.yaml
kubectl apply -f resources-manifests/frontend-service.yaml
kubectl apply -f resources-manifests/ingress.yaml
```

Then, find out the IP address of the Minikube cluster:

```bash
minikube ip
```

Finally, head to a web browser and hit the IP address returned by the command above. Also, if needed you can use the following commands to shutdown everything: 

```bash
kubectl delete -f resources-manifests/deployment.yaml
kubectl delete -f resources-manifests/backend-service.yaml
kubectl delete -f resources-manifests/frontend-service.yaml
kubectl delete -f resources-manifests/ingress.yaml
```
