using System.Threading.Tasks;

namespace DTG.API.Data
{
    public class UnitOfWork : IUnitOfWork
  {
    private readonly DataContext context;

    public UnitOfWork(DataContext context)
    {
      this.context = context;
    }

    public async Task CompleteAsync()
    {
      await context.SaveChangesAsync();
    }
  }
}